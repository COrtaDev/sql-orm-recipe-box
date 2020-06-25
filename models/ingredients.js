'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredients = sequelize.define('ingredients', {
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
  ingredients.associate = function (models) {
    ingredients.belongsTo(models.recipe, { forgeinKey: 'recipeId' });
    ingredients.belongsTo(models.MeasurementUnit, { forgeinKey: 'measurementUnitId' });
  };
  return ingredients;
};
