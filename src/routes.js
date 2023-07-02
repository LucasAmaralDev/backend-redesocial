const { Router } = require('express');


// Controllers user
const registerUserController = require('./controllers/user/register-user-controller');
const loginUserController = require('./controllers/user/login-user-controller');


// Controllers actions
const addPersonalInfoController = require('./controllers/personalinfo/add-personalinfo-controller');
const findPersonalInfoController = require('./controllers/personalinfo/find-personalinfo-controller');

const { authMiddleware } = require('./middleware/auth-middleware');

const routes = Router();

// Users
routes.post('/register', registerUserController.signup);
routes.post('/login', loginUserController.sigin);

// Personal info
routes.post('/add-personal-info', authMiddleware, addPersonalInfoController.post)
routes.get('/find-personal-info', authMiddleware, findPersonalInfoController.find)




module.exports = { routes };
