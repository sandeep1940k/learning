
const { STATUS } = require('../constant/http-status-code.constant');
const { MESSAGE } = require('../constant/message.constant');
const authenticationDao = require('../doa/authentication.dao')

const signup = async (req, res) => {
    try {
        await authenticationDao.create(req.body);
        return res.status(STATUS.CREATED).send({ message: MESSAGE.SIGNUP_SUCCESSFULLY});
    } catch (error) {
        return res.status(STATUS.UNAUTHORIZED).send({ message: MESSAGE.PLEASE_CHANGE_EMAIL_OR_PASSWORD});
    }
}
const login = async (req, res) => {
    try {
        /* ----- check the exist the email and password ----- */
        console.log('req.body', req.body)
        const isExists = await authenticationDao.exists({ email: req.body.email, password: req.body.password });
        if (isExists) { return res.status(STATUS.OK).send({ message: MESSAGE.LOGIN_SUCCESSFULLY }) }
        return res.status(STATUS.UNAUTHORIZED).send({ message: MESSAGE.PLEASE_CORRECT_EMAIL_OR_PASSWORD});
    } catch (error) {
        return res.status(STATUS.UNAUTHORIZED).send({ message: MESSAGE.PLEASE_CORRECT_EMAIL_OR_PASSWORD});
    }
}

module.exports = {
    signup,
    login
}