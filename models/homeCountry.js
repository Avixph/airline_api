const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeCountry = new Schema(
  {
    name: { type: String, required: true },
    country_flag: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("home_countries", HomeCountry);
