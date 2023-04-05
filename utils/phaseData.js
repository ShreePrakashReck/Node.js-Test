const axios = require("axios");
const DataSchema = require("../models/DataSchema");
async function phaseData() {
  let arrayData = [];
  const res = await axios.get("https://api.wazirx.com/api/v2/tickers");
  let array = [...Object.keys(res.data).splice(0, 10)];

  for (let data of array) {
    arrayData.push(res.data[data]);
  }

  for (let data of arrayData) {
    let dataCal = new DataSchema({
      name: data.name,
      last: data.sell,
      Buy: data.buy,
      SellPrice: data.sell,
      volume: data.volume,
      base_unit: data.base_unit,
    });
    dataCal.save();
  }
}
module.exports = {
  phaseData,
};
