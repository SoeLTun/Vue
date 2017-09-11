module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({
            message: 'Welcome'
        })
    })

    app.get('/test', (req, res) => {
        res.send({
            message: 'Hello World!'
        })
    })

    const AuthenticationController = require('./controller/AuthenticationController')
    app.post('/register', AuthenticationController.register)
}