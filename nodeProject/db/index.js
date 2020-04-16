//Instantiates a database connection using information from the configuration file.
const Sequelize = require('sequelize')
const UserModel = require('./models/user')
const config = require('../config/dbConfig.json')

const sequelize = new Sequelize(config.dbName, config.userName, config.password, config.connection)

const User = UserModel(sequelize, Sequelize)

User.sync({alter: true})

module.exports = {User}