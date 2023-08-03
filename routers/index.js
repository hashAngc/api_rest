const express = require("express")
const fs = require("fs")
const routes = express.Router()

const PATH_ROUTER = __dirname;
const removeExtension = (filename) => {
    // tracks.js [tracks, js]
    return filename.split('.').shift()
}
const router = fs.readdirSync(PATH_ROUTER).filter((file) => {
    const name = removeExtension(file)
    if (name !== 'index') {
        routes.use(`/${name}`, require(`./${file}`))
    }
})
console.log(router)

module.exports = routes