//Service for user related operations
const { User } = require('../db')

/**
 * Add user to the database. Currently no constraints exist.
 * @param {*} user 
 */
const addUser = (user) => {

    console.log(user)

    User.create({ 
        username: `${user.username}`,
        password: `${user.password}`,
        first_name: `${user.firstName}`,
        last_name: `${user.lastName}`,
        email: `${user.email}`
    })
    .then(result => {
        console.log("Auto-generated ID:", result.id)
        return result
    }).catch(err => {
        console.log("Error updating User table: ",err)
    })
}

/**
 * Retrieve all entries in the user database table.
 */
const getUsers = () => {

    return User.findAll()
}

export {addUser, getUsers}
