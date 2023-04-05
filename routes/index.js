const router = require("express").Router();
const postRouter = require("./post");
router.use("/post", postRouter);
module.exports = router;
