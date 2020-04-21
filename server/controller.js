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
            console.log('user authenticated')
            console.log(existingUser[0])
            delete existingUser[0].password
            req.session.user = existingUser[0]
            console.log(req.session)
            res.status(200).send(req.session.user)
        } else {
            res.status(403).send('login failed')
        }
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
        const profile_pic = `https://robohash.org/${username}`
        const newUser = await db.register_new_user([username, hash, profile_pic])

        req.session.user = newUser[0]
        console.log(newUser)
        res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        if(req.session.user){
        req.session.destroy()
        res.sendStatus(200)
        }
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
        // endpoint that sends back user on session if there is one. used to refresh front end we can still get there info. attach into componentDidMount. 
    }

}