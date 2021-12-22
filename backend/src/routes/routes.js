const express = require('express');
const route = express.Router();
const addUser = require('../controllers/addUser');
const login = require('../controllers/login');

route.post('/addUser', addUser.addUser);
route.post('/access/login', login.access);

module.exports = route;