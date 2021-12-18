const express = require('express');
const authRoute = express.Router();
const auth = require('../controllers/auth');

authRoute.post('/refres-access-token', auth.refreshAccesaToken);

module.exports = authRoute;