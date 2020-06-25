'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING(200),
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  recipe.associate = function (models) {
    recipe.hasMany(models.Instruction, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true });
    recipe.hasMany(models.ingredients, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true });
  };
  return recipe;
};
