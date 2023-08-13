const {storageSchema} = require("../models/index");
const PUBLIC_URL = process.env.PUBLIC_URL || "http://localhost:3000"
/**
 *  @desc Get all tracks
 */
const getItems = async (req,res) => {
    const data = await storageSchema.find({})
    res.send({ data })
}
/**
 * @desc Get a track
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req,res) => {

}

const createItem = async (req,res) => { 
    const {body,file}=req
    console.log(file)
    const fileData={
        fileName:file.filename,
        url:`${PUBLIC_URL}/storage/${file.filename}`
    }
    const data = await storageSchema.create(fileData)
    res.send({data})
}

const updateItem = (req,res) => {

}

const deleteItem = (req,res) => {

}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }