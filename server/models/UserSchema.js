const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

// middleware
userSchema.pre("save", async function () {
  try {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    console.log(error);
  }
});
// comparing password
userSchema.methods.comparePassword = async function (candidatePass) {
  return await bcrypt.compare(candidatePass, this.password);
};

module.exports = mongoose.model("user", userSchema);
