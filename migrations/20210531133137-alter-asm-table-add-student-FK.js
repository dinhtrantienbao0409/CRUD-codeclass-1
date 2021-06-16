'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('Assignments', {
      fields: ['studentId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_studentId',
      references: { //Required field
        table: 'Students',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint( "Assignments", "custom_fkey_constraint_studentId" )
  }
};
