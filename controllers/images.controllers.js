const multer = require("multer");
const { postOne, getOne } = require("../models/image.models");

const postImageObject = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })

  const upload = multer({storage}).single("file");

  upload(req, res, (err) => {
    if (err) {
      res.status(500).json({errorMessage: err.message});
    } else {
      req.imageName = req.file.filename;
      next();
    }
  })
}

const postImage = async (req, res) => {
  const name = req.imageName;
  try {
    const [result] = await postOne(name);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({errorMessage: err.message});
  }
}

const getImages = async (req, res) => {
  try {
    const [result] = await getOne();
    res.status(200).json(result[1]);
  } catch (err) {
    res.status(500).json({errorMessage: err.message});
  }
}

module.exports = {
  postImageObject,
  postImage,
  getImages,
}