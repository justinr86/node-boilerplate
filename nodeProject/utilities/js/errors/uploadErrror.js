class uploadError extends Error {

    constructor(message, fileName) {
        super(message)
        this.name = "File Upload Error"
        this.fileName = fileName
    }
}