const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

    },
    register: async (req, res) => {

    },
    logout: (req, res) => {

    },
    getUser: (req, res) => {

    }

}