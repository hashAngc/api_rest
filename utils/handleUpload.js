const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const PATH_STORAGE=`${__dirname}/../storage`;
        cb(null, PATH_STORAGE)
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split(".").pop()
        const filename = `${file.fieldname}-${Date.now()}.${ext}`
        cb(null, filename)
    }

})

const middlewareUpload = multer({ storage })

module.exports = middlewareUpload
