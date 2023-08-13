const express = require("express")
const router = express.Router()
const middlewareUpload = require("../utils/handleUpload")
const {createItem} = require("../controllers/storage")
const costumHeader = require("../middleware/costumerHeader")
/**
 *  llamo a multer para subir archivos
 * 
 */


router.post("/",middlewareUpload.single("myFile"),costumHeader, createItem)

module.exports = router