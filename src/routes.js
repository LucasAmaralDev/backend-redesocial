const { Router } = require('express');

const registerUserController = require('./controllers/user/register-user-controller');
const loginUserController = require('./controllers/user/login-user-controller');

const { authMiddleware } = require('./middleware/auth-middleware');

const routes = Router();

// Users
routes.post('/register', registerUserController.signup);
routes.post('/login', loginUserController.sigin);


module.exports = { routes };
