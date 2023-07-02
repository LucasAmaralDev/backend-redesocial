const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { UserModel } = require('../models/user-model');
const { NutritionistModel } = require('../models/nutritionist-model');
const { RecipeModel } = require('../models/recipe-model');

const database = new Sequelize(configDatabase);

// init models
UserModel.init(database);
NutritionistModel.init(database);
RecipeModel.init(database);

// relationships
UserModel.associate(database.models);
NutritionistModel.associate(database.models);
RecipeModel.associate(database.models);

module.exports = database;
