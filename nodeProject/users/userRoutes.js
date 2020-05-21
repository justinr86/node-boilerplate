//Define API endpoints for the user page(s)
import express from 'express'
import logger from '../utilities/js/logger.js'
import {addUser, getUsers} from './userService.js'

const router = express.Router()

router.get('/users/add', (req, res) => {
    logger.info('GET - Add Users')
    res.render('newUser')
    res.end()
})

router.get('/users', (req, res) => {
    logger.info('GET - Display Users')
    getUsers().then( (users) => {
        console.log("Users: ", users)
        res.render('displayUsers', {userData: users})
    })
})

router.post('/users/add', (req, res) => {
    const result = addUser(req.body)
    console.log(result)
    res.end()
})

export default router