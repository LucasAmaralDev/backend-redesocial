const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { UserModel } = require('../models/user-model');
const { ActivitiesModel } = require('../models/activities-model')
const { PersonalInfoModel } = require('../models/personalinfo-model')
const { PostsModel } = require('../models/posts-model')

const database = new Sequelize(configDatabase);

// init models
UserModel.init(database);
ActivitiesModel.init(database);
PersonalInfoModel.init(database);
PostsModel.init(database);

// relationships
UserModel.associate(database.models);
PersonalInfoModel.associate(database.models);
ActivitiesModel.associate(database.models);
PostsModel.associate(database.models);

module.exports = database;
