const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const existingUser = await db.check_if_user([username])
        if(!existingUser[0]){
            res.status(404).send('Username does not exist')
        }
        const authenticated = bcrypt.compareSync(password, existingUser[0].password)
        if(authenticated){
            delete existingUser[0].password
            req.session.user = existingUser[0]
            res.status(200).send(req.session.user)
        } else {
            res.status(403).send('login failed')
        }
        console.log(req.session.user)
    },
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const existingUser = await db.check_if_user([username])
        if(existingUser[0]){
            return res.status(409).send('Username is Taken')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.register_new_user([username, hash])

        req.session.user = newUser[0]
        console.log(req.session.user)
        res.status(200).send(`Welcome to Helo ${username}`)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.status(200).send(req.session.user)
    },
    getUser: (req, res) => {
        
    }

}