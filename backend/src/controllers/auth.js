const { decodeToken } = require('../jwt/jwt');
const moment = require('moment');
const auth = {}

function checkExpireToken(token) {
    const {exp} = decodeToken(token);
    const now = moment().unix();
    return now > exp;
}

auth.refreshAccesaToken = (req, res) => {
    const { refreshToken } = req.body;
    if(checkExpireToken(refreshToken)) {
        res.status(500).send({message:"The refresh token has expired"})
    } else {
        console.log("refresh access token");
    }
}

module.exports = auth;