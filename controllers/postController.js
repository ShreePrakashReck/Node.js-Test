const DataModel = require("../models/DataSchema");

const postController = async (req, res) => {
  const data = await DataModel.find();
  res.send(data);
};

module.exports = {
  postController,
};
