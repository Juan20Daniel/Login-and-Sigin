const login = {}
const connection = require('../model/model');
const { createToken } = require('../jwt/jwt');

login.access = (req, res) => {
    const { email, password } = req.body;
    connection.query(`SELECT email, password FROM users WHERE email = '${email}' and password = '${password}'`, (err, rows) => {
        if(err) {
            res.status(500).json({error:err});
        }  else {
            if(rows.length === 0) {
                res.status(404).json({message:"The user not exists!!"});
            } else {
                res.status(200).json({
                    accessToken:createToken(rows[0])
                });
            }
        }
    })
}

module.exports = login;