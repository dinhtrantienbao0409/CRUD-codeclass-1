'use strict';
const {
  Model
} = require('sequelize');
const assignment = require('./assignment');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.hasMany(models.Assignment);
    }
  };
  Student.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};