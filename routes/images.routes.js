const { postImageObject, postImage, getImages } = require("../controllers/images.controllers");

const router = require("express").Router();

router.get("/", getImages);

router.post("/", postImageObject, postImage);

module.exports = router;