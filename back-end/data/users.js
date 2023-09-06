const bcrypt = require('bcryptjs') //hash password

const users = [
    {
        name: 'Admin User',
        email: 'admin@defeault.com',
        password: bcrypt.hashSync('123456', 10), 
        isAdmin: true
    },
    {
        name: 'Micheal Jordan',
        email: 'micheal@defeault.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Larry Bird',
        email: 'larry@defeault.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
]

module.exports = users