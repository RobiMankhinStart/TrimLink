const { verifyToken } = require("../utils/Token");

const isAuthentic = (req, res, next) => {
  try {
    // with default browser cookies
    //   const token = req.cookies.acc_tok;
    //   const decoded = verifyToken(token);
    //   console.log("cookie", token.acc_tok);
    //   console.log("decoded_Token", decoded);

    // manually with header
    const Headertoken = req.headers.authorization;
    console.log("Header_Token :", Headertoken);

    // If it starts with Bearer, spliting it. If not, using the whole string.
    const token = Headertoken.startsWith("Bearer ")
      ? Headertoken.split(" ")[1]
      : Headertoken;
    console.log("BearerCut_token :", token);

    const decoded = verifyToken(token);
    // console.log("decoded_Token :", decoded);
    // console.log("user_in_MiddleWare :", req.user);
    req.user = decoded;
    // console.log("afterDecoding_user_in_Middleware :", req.user);

    next();
  } catch (error) {
    next();
  }
};
// const authMiddleware = (req, res, next) => {
//   try {
//     const Headertoken = req.headers.authorization;
//     console.log("AuthMiddle_Header_Token :", Headertoken);
//     const decoded = verifyToken(Headertoken);
//     if (!decoded)
//       return res.status(401).send({ message: "unauthorize request" });

//     req.user = decoded;

//     next();
//   } catch (error) {
//     res.status(500).send({ message: "unauthorize user" });
//   }
// };
const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("authHeader :", authHeader);

    if (!authHeader)
      return res.status(401).send({ message: "No token provided" });

    // If it starts with Bearer, spliting it. If not, using the whole string.
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;
    console.log("BearerCut_token :", token);

    if (!token) {
      return res.status(401).send({ message: "Invalid token format" });
    }

    const decoded = verifyToken(token);
    console.log("decoded_token :", decoded);
    if (!decoded)
      return res.status(401).send({ message: "unauthorize request" });
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid or expired token" });
  }
};
module.exports = { authMiddleware, isAuthentic };
