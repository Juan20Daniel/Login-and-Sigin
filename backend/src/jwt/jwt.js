const jwt = require('jwt-simple');
const moment = require('moment');
const secret_key = "f45fgwA5hi1zmsk4fv9gyg0hg3j";

function createToken(data) {
    const payload = {
        idUser:data.idUser,
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        expire:moment().add(3, 'days').unix(),
    }
    return jwt.encode(payload, secret_key);
}

function decodeToken(token) {
    return jwt.decode(token, secret_key);
}
module.exports = {
    createToken,
    decodeToken
}