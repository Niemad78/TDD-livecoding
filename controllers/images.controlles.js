const multer = require("multer")

const postImageObject = (req, res) => {
  const stockage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })

  const upload = multer({stockage}).single("file");

  upload(req, res, (err) => {
    if (err) {
      res.status(500).json({errorMessage: err.message});
    } else {
      res.status(200).json({message: "ok"})
    }
  })
}

module.exports = {
  postImageObject,
}