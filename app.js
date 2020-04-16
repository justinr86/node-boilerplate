import express from 'express'
import logger from './nodeProject/utilities/js/logger.js'
import dotenv from 'dotenv'
import {ErrorHandler, handleError} from './nodeProject/utilities/js/restErrorHandler.js'
import homeRouter from './nodeProject/home/homeRoutes.js'
import userRouter from './nodeProject/users/userRoutes.js'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()

app.use(express.static(__dirname))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

//Indicate which folders to look in when rendering views.
app.set('views', ['./nodeProject/home/views', './nodeProject/users/views'])

app.set('view engine', 'ejs')

//Set API endpoints for home page
app.use(homeRouter)

//Set API endpoints for user page(s)
app.use('/api', userRouter)

//Set error API endpoint, used to test error handling
app.get('/error', (req, res) => {
    logger.info('GET - Error')
    throw new ErrorHandler(404, 'Try Again, Resource Not Found')
})

//Error handler, this will display a default page when something goes wrong
app.use((error, req, res, next) => {
    if (req.accepts('html')) {
        console.log('Error', error)
        res.render('index')
        return
    }

    if (req.accepts('json')) {
        handleError(error, res)        
        return
    }
})

const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV || 'development'

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`)
    console.log(`Environment - ${ENV}`)
    console.log('Press Ctrl+C to quit.')
})