const express = require("express")
const { getItems, getItem, createItem,updateItem,deleteItem } = require("../controllers/tracks")
const { validatorCreateItems, validatorGetItem } = require('../validators/tracks')
const routes = express.Router()
const costumHeader = require("../middleware/costumerHeader")
const {authmiddleware} = require("../middleware/session")
const rol = require("../middleware/rol")

// Controllers get, post, put, delete


/**
 * 
 * para obtener todos los items
 */
routes.get("/",authmiddleware, getItems)

/**
 * para obtener un item
 */
routes.get("/:id", validatorGetItem, getItem)

/**
 * para crear un item
 */
routes.post("/",authmiddleware,rol(["admin"]) ,validatorCreateItems, costumHeader, createItem)

/**
 * para actualizar un item
 */

routes.put("/:id", validatorGetItem,validatorCreateItems, costumHeader, updateItem)


routes.delete("/:id",validatorGetItem,costumHeader,deleteItem)


module.exports = routes
