const { postController } = require("../controllers/postController");

const router = require("express").Router();

router.get("/all", postController);

module.exports = router;
