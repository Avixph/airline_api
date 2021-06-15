const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirlineCompany = new Schema(
  {
    name: { type: String, required: true },
    IATA_code: { type: String, required: true },
    website_link: { type: String, required: true },
    home_country: { type: Schema.Types.ObjectId, ref: "home_countries" },
    overview: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("airline_companies", AirlineCompany);
