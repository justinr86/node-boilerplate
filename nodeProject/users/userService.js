//Service for user related operations
const { User } = require('../db')

/**
 * Add user to the database. Currently no constraints exist.
 * @param {*} user 
 */
const addUser = (user) => {

    User.create({ 
        username: `${user.userName}`,
        password: `${user.password}`,
        first_name: `${user.firstName}`,
        last_name: `${user.lastName}`,
        email: `${user.email}`
    })
    .then(result => {
        console.log("Auto-generated ID:", result.id)
    })
}

/**
 * Retrieve all entries in the user database table.
 */
const getUsers = () => {

    return User.findAll()
}

export {addUser, getUsers}
