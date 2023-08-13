const { matchedData } = require("express-validator");
const { trackSchema } = require("../models/index");
const { handlerError } = require("../utils/handleError");
/**
 *  @desc Get all tracks
 */
const getItems = async (req, res) => {

    try {
        req = matchedData = (req)
        const user = req.user
        const data = await trackSchema.find({})
        res.send({ data, user })
    } catch (error) {
        handlerError(res, error, 402)
    }
}
/**
 * @desc Get a track
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        const req = matchedData(req)
        const {id} = req
        const data = await trackSchema.findById(id)
        res.send({ data })
    } catch (error) {
        handlerError(res, error, 402)
    }
}

const createItem = async (req, res) => {

    try {
        const body = matchedData (req)
        // const { body } = req
        const data = await trackSchema.create(body)
        res.send({ data })
    } catch (error) {
        handlerError(res, error, 402)
    }
}

const updateItem = async (req, res) => {
    try {
        const  {id,...body} = matchedData(req)
        const data = await trackSchema.findOneAndUpdate(id,body)
        res.send({ data })
    } catch (error) {
        handlerError(res, error, 402)
    }
}

const deleteItem = async (req, res) => {
    try {
        const req = matchedData(req)
        const { id } = req
        const data = await trackSchema.delete({_id:id})
        res.send({ data })
    } catch (error) {
        handlerError(res, error, 402)
    }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }