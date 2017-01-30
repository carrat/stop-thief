'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cardtype = sequelize.define('Cardtype', {
    card_type: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'cardtypes',
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Cardtype;
};