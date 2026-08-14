const ShortnerSchema = require("../models/ShortnerSchema");
const { RandomStr } = require("../utils/RandomStr");
const { isValidUrl } = require("../utils/Validate");

const CreateUrl = async (req, res) => {
  const { longUrl } = req.body;
  console.log("userFromCreateUrl", req.user);

  try {
    // const token = req.cookies;
    // console.log("cookie", token.acc_tok);

    if (!longUrl) return res.status(400).send({ message: "Enter a valid url" });
    if (!isValidUrl(longUrl))
      return res.status(400).send({ message: "Invalid url" });
    const newShortUrl = RandomStr();
    const urlData = new ShortnerSchema({
      longUrl: longUrl,
      shortUrl: newShortUrl,
      userInfo: req.user?.id,
    });
    await urlData.save();
    // 1. Convert Mongoose Document to a plain JS Object
    const urlResponse = urlData.toObject();

    // 2. Remove the sensitive field
    delete urlResponse.userInfo;
    return (
      res
        .status(200)
        // .send({ longUrl: urlData.longUrl, shortUrl: urlData.shortUrl });
        .send(urlResponse)
    );
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "internal server error" });
  }
};

const RedictUrl = async (req, res) => {
  try {
    const params = req.params;
    if (!params.id)
      return res.status(400).send({ messsage: "invalid request" });

    const urlData = await ShortnerSchema.findOne({ shortUrl: params.id });
    console.log("urlData", urlData);
    if (!urlData) return res.status(400).send({ message: "url not found" });
    if (urlData.userInfo) {
      urlData.visitHistory.push({ visitTime: Date.now() });
      await urlData.save();
    }
    res.redirect(urlData.longUrl);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const getShortUrlDetails = async (req, res) => {
  try {
    const user = req.user;
    const urlHistory = await ShortnerSchema.find({ userInfo: user.id });
    //   .select(
    //   "-userInfo",
    // );
    // console.log(urlHistory);
    res.status(200).send(urlHistory);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;
    const urlData = await ShortnerSchema.findOne({ _id: id, userInfo: userId });
    if (!urlData) {
      return res.status(404).send({ message: "URL not found or unauthorized" });
    }
    await ShortnerSchema.findByIdAndDelete(id);
    res.status(200).send({ message: "URL deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
module.exports = { CreateUrl, RedictUrl, getShortUrlDetails, deleteUrl };
