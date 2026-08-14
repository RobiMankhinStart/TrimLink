var jwt = require("jsonwebtoken");

const GenerateRanTok = (payload) => {
  var token = jwt.sign(payload, process.env.JWT_SECTO);
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECTO);
  return decoded;
};

module.exports = { GenerateRanTok, verifyToken };
