require('dotenv').config()
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

const {EMAIL, EMAIL_PASS} = process.env

module.exports = {
    register: async (req, res) => {
        const {username, email, password} = req.body
        const db = req.app.get('db')
        const result = await db.get_user([username])
        const existingUser = result[0]
        if (existingUser) {
            return res.status(409).send('Username Taken')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const registeredUser = await db.register_user([username, email, hash])
        const user= registeredUser[0]
        req.session.user = { username: user.username, id: user.user_id }
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: EMAIL_PASS
            }
        })
        
        let mailOptions = {
            from: 'turn.tble35@gmail.com',
            to: email,
            subject: 'Welcome!',
            text: 'Welcome, and thank you for joining Turn-TBL.  If you have any issues, please let us know by sending a message.'
        }
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log(err)
            }else {console.log('email sent')}
        })
        return res.status(201).send(req.session.user)
    },

    login: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const foundUser = await db.get_user([email])
        const user = foundUser[0]
        if (!user) {
            return res.status(401).send('User  not found. Please register as a new user before logging in.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect Password')
        }
        req.session.user = {username: user.username, id: user.user_id}
        console.log(req.session.user)
        return res.status(200).send(req.session.user)
    },

    logout: async (req, res) => {
        req.session.destroy()
        return res.sendStatus(200)
    }
}