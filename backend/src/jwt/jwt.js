const jwt = require('jwt-simple');
const moment = require('moment');
const secret_key = "f45fgwA5hi1zmsk4fv9gyg0hg3j";

function createToken(data) {
    const payload = {
        idUser:data.idUser,
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        exp:moment().add(3, 'hours').unix()
    }
    return jwt.encode(payload, secret_key);
}
function refreshToken(data) {
    const payload = {
        idUser:data.idUser,
        exp:moment().add(30, 'days').unix()
    }
    return jwt.encode(payload, secret_key);
}
module.exports = {
    createToken,
    refreshToken
}