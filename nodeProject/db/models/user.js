//Represents a user entry in the database.
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        username: {
            type: type.STRING(24),
            allowNull: false
        },
        password: {
            type: type.STRING(30)
        },
        first_name: {
            type: type.STRING(12)
        },
        last_name: {
            type: type.STRING(24)
        },
        email: {
            type: type.STRING(50)
        }
    },
    {
        tableName: 't_user'
    })
}
