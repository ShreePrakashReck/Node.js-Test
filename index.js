const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const dbConnect = require("./dbConnect");
const mainRouter = require("./routes/index");
const app = express();
const phaseData = require("./utils/phaseData");
const cors = require("cors");
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
dbConnect();
app.use("/api", mainRouter);
app.listen(PORT, () => {
  console.log("Listening on port :", PORT);
});
