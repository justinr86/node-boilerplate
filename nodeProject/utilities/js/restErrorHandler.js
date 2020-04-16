/**
 * Custom error handler handler
 */
class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super()
        this.statusCode = statusCode
        this.message = message
    }
}

/**
 * Sends JSON data back as response indicating what the error was
 * @param {*} err 
 * @param {*} res 
 */
const handleError = (err, res) => {
    const {statusCode, message} = err

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    })

}

module.exports = {
    ErrorHandler,
    handleError
}