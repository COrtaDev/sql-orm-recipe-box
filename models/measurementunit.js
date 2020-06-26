'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    name: {
      type: DataTypes.STRING(20),
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  MeasurementUnit.associate = function (models) {
    MeasurementUnit.hasMany(models.Ingredient, { foreignKey: 'measurementUnitId', onDelete: 'CASCADE', hook: true });
  };
  return MeasurementUnit;
};
