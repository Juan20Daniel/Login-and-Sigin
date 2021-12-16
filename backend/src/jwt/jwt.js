const jwt = require('jwt-simple');
const moment = require('moment');
const secret_key = "f45fgwA5hi1zmsk4fv9gyg0hg3j";

function createToken(data) {
    // const payload = {
    //     idUser:data.idUser,
    //     firstname:data.firstname,
    //     lastname:data.lastname,
    //     email:data.email,
    //     exp:moment().add(3, 'hours').unix()
    // }
    console.log(data.idUser);
}

module.exports = {
    createToken
}