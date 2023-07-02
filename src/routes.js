const { Router } = require('express');

const registerUserController = require('./controllers/user/register-user-controller');
const loginUserController = require('./controllers/user/login-user-controller');

const createNutritionistController = require('./controllers/nutritionist/create-nutritionist-controller');
const deleteNutritionistController = require('./controllers/nutritionist/delete-nutritionist-controller');

const createRecipeController = require('./controllers/recipe/create-recipe-controller');

const { authMiddleware } = require('./middleware/auth-middleware');

const routes = Router();

// Users
routes.post('/register', registerUserController.signup);
routes.post('/login', loginUserController.sigin);

// Nutritionist
routes.post('/nutritionist', authMiddleware, createNutritionistController.create);
routes.delete('/nutritionist', authMiddleware, deleteNutritionistController.delete);

// Recipe
routes.post('/recipe', authMiddleware, createRecipeController.create);

module.exports = { routes };
