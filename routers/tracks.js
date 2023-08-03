const express = require("express")
const routes = express.Router()

// Controllers get, post, put, delete
routes.get("/", (req, res) => {
    const data = ["track1", "track2", "track3"]
    res.send({ data })
})
module.exports = routes
