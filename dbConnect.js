const mongoose = require("mongoose");

module.exports = () => {
  const mongoUri =
    "mongodb+srv://ReckUsers:pL9Ff7918PnkJj4C@cluster0.s5ovz9g.mongodb.net/?retryWrites=true&w=majority";
  try {
    mongoose
      .connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Mongoodb Connected");
      });
  } catch (e) {
    console.log(e);
  }
};
