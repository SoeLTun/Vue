const { User } = require('../models')

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (error) {
            console.log(error);
            res.status(400).send({
                error: 'This username or email account is already use',
                errotDetail: error
            })
        }
    }
}