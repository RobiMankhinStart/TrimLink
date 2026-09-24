const { verifyToken } = require("../utils/Token");

const getTokenFromRequest = (req) => {
  const authHeader = req.headers.authorization;
  const cookieToken = req.cookies?.acc_tok;
  const rawToken = authHeader || cookieToken;

  if (!rawToken) return null;

  return rawToken.startsWith("Bearer ") ? rawToken.split(" ")[1] : rawToken;
};

const isAuthentic = (req, res, next) => {
  try {
    const token = getTokenFromRequest(req);

    if (!token) {
      return res.status(401).send({ message: "No token provided" });
    }

    const decoded = verifyToken(token);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid or expired token" });
  }
};

const optionalAuth = (req, res, next) => {
  try {
    const token = getTokenFromRequest(req);

    if (!token) {
      return next();
    }

    const decoded = verifyToken(token);
    if (decoded) {
      req.user = decoded;
    }

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
    const cookieToken = req.cookies?.acc_tok;
    const rawToken = authHeader || cookieToken;

    if (!rawToken) {
      return res.status(401).send({ message: "No token provided" });
    }

    const token = rawToken.startsWith("Bearer ")
      ? rawToken.split(" ")[1]
      : rawToken;

    if (!token) {
      return res.status(401).send({ message: "Invalid token format" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).send({ message: "unauthorize request" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid or expired token" });
  }
};
module.exports = { authMiddleware, isAuthentic, optionalAuth };
