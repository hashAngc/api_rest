const handlerError = (res, message = "algo sucedio", code = 402) => {
    res.status(code)
    res.send({ "error": message })
}

module.exports = {handlerError}