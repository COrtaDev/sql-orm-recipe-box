const { Op } = require('sequelize');
let Recipe, Instruction, Ingredient, MeasurementUnit;
let moduleError;

try {
  const db = require('../models');
  ({ Recipe, Instruction, Ingredient, MeasurementUnit } = db);
  if (Recipe === undefined) {
    moduleError = 'It looks like you need to generate the Recipe model.';
  }
} catch (e) {
  console.error(e);
  if (e.message.includes('Cannot find module')) {
    moduleError = 'It looks like you need initialize your project.';
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/

async function getTenNewestRecipes() {
  return await Recipe.findAll({
    limit: 10,
    order: [['updatedAt', 'DESC']]
  });
}

async function getRecipeById(id) {
  return await Recipe.findByPk(id, {
    include: [
      Instruction,
      {
        model: Ingredient,
        include: [MeasurementUnit]
      }
    ]
  });
}

async function deleteRecipe(id) {
  const recipeVar = await Recipe.findByPk(id);
  await recipeVar.destroy()
}

async function createNewRecipe(title) {
  return await Recipe.create({ title })
}

async function searchRecipes(term) {
  return await Recipe.findAll({ where: { title: { [Op.like]: term } } });
}




/* Don't change code below this line ******************************************/
module.exports = {
  createNewRecipe,
  deleteRecipe,
  getRecipeById,
  getTenNewestRecipes,
  searchRecipes,
  loadingDbError: moduleError,
};
