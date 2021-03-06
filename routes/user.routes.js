require('dotenv').config();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models');
const User = db.users;
module.exports = (app) => {
	const userController = require('../controller/user.controller');
	let router = require("express").Router();
	router.post('/register', userController.register);
	router.post('/login', userController.login);
	router.get('/protected-info', passport.authenticate('jwt', { session: false }), (req, res) => {
		return res.json({
			status: 'ok',
			msg: 'this is protected route'
		})
	});

	app.use('/users', router);
};
