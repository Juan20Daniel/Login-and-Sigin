const connection = require('../model/model');
const { createToken } = require('../jwt/jwt');
const controller = {}

controller.addUser = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    connection.query("INSERT INTO users VALUES(?,?,?,?,?)", 
        [null,firstname,lastname,email,password], (err, rows) => {
        if(err) {
            res.status(500).send({error:err});
        } else {
            connection.query("SELECT * FROM users WHERE email = ?", [email], (err, rows) => {
                if(err) {
                    res.status(500).send({error:err});
                } else {
                    res.status(200).send({
                        accessToken:createToken(rows[0])
                    });
                }
            });
        }
    });
}

module.exports = controller;