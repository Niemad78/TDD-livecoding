const { postImageObject, postImage, getImages } = require("../controllers/images.controlles");

const router = require("express").Router();

router.get("/", getImages);
router.post("/", postImageObject, postImage);

module.exports = router;