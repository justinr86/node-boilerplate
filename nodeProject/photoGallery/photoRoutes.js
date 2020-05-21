//Define API endpoints for the photo page(s)
import express from 'express'
import logger from '../utilities/js/logger.js'
import {savePhoto, getAllPhotos, getPhoto} from './photoService.js'

const router = express.Router()

router.get('/photos', (req, res) => {
    logger.info('GET - Display Photos')
    getAllPhotos().then(
        res.render('photoGallery')
    )
})

router.get('/photos/add', (req, res) => {
    logger.info('GET - Uploads Photos')
    res.render('uploadPhoto')
})

/**
 * Add one photo to the img directory
 */
router.post('/photos/add', (req, res) => {

    try {

        console.log(req.files)

        let file = req.files

        savePhoto(file)

    } catch(err) {
        console.error('Error uploading image')
        console.error(err)
    }
    res.end()
})


export default router
