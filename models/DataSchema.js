const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  name: String,
  last: Number,
  Buy: Number,
  SellPrice: Number,
  volume: Number,
  base_unit: String,
});

module.exports = mongoose.model("DataSchema", dataSchema);
