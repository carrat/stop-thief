'use strict';
module.exports = function(sequelize, DataTypes) {
  var Money = sequelize.define('Money', {
    money_name: DataTypes.STRING,
    money_value: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'money',
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Money;
};