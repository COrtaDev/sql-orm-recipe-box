'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      }
    },
    listOrder: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    }
  }, {});
  Instruction.associate = function (models) {
    Instruction.belongsTo(models.recipe, { foreignKey: 'recipeId' });

  };
  return Instruction;
};
