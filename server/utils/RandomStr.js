const RandomStr = (finalStrLength = 5) => {
  const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
  let finalStr = "";
  for (let i = 0; i < finalStrLength; i++) {
    const RandomNum = Math.floor(Math.random() * char.length);
    finalStr += char[RandomNum];
  }
  return finalStr;
};
module.exports = { RandomStr };
