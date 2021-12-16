const express = require('express');
const route = express.Router();
const addUser = require('../controllers/addUser');

route.post('/addUser', addUser.addUser);

module.exports = route;