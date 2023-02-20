'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GigsModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GigsModel.init({
    title: DataTypes.STRING,
    technologies: DataTypes.STRING,
    description: DataTypes.STRING,
    budget: DataTypes.STRING,
    contact_email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GigsModel',
  });
  return GigsModel;
};