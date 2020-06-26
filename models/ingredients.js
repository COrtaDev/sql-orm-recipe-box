'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define('Ingredients', {
    amount: {
      type: DataTypes.NUMERIC(5, 2),
      validate: {
        notEmpty: true,
      },
    },
    measurementUnitId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    foodStuff: {
      type: DataTypes.STRING(500),
      validate: {
        notEmpty: true,
      },
    },
    recipeId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    }
  }, {});
  Ingredients.associate = function (models) {
    Ingredients.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
    Ingredients.belongsTo(models.MeasurementUnit, { foreignKey: 'measurementUnitId' });
  };
  return Ingredients;
};
