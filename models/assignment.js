'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Assignment.belongsTo(models.Student, {
          foreignKey: 'studentId',
          as: 'CASCADE',
        });
    }
  };
  Assignment.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};