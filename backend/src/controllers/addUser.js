const connection = require('../model/model');
const { createToken } = require('../jwt/jwt');
const controller = {}

controller.addUser = (req, res) => {
    const { email } = req.body;
    connection.query("SELECT * FROM users WHERE email = ?", [email], (err, rows) => {
        if(err) {
            res.status(500).send({error:err});
        } else {
            console.log(rows[0].idUser)
        }
    });
}

module.exports = controller;