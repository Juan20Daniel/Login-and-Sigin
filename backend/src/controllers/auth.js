const { createToken, decodeToken } = require('../jwt/jwt');
const connection = require('../model/model');
const moment = require('moment');
const auth = {}

function checkExpireToken(exp) {
    const now = moment().unix();
    return now > exp;
}

auth.refreshAccesaToken = (req, res) => {
    const { refreshToken } = req.body;
    const { idUser, expira } = decodeToken(refreshToken);
    if(checkExpireToken(expira)) {
        res.status(500).send({message:"The refresh token has expired"});
    } else {
        connection.query("SELECT * FROM users WHERE idUser = ?", [idUser], (err, rows) => {
            if(err) {
                res.status(500).send({message:"Error of the server"});
            } else {
                res.status(200).send({
                    accessToken:createToken(rows[0]),
                    refreshToken:refreshToken
                });
            }
        });
    }
}

module.exports = auth;