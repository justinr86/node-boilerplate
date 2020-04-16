//Define API endpoints for the home page
import express from 'express'
import logger from '../utilities/js/logger.js'

const router = express.Router()

router.get('/', (req, res) => {
    logger.info('GET - Home')
    res.render('index')
    res.end()
})

export default router