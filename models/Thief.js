'use strict';
module.exports = function(sequelize, DataTypes) {
  var Thief = sequelize.define('Thief', {
    thief_name: DataTypes.STRING,
    image: DataTypes.STRING,
    crimes: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    bounty: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'thiefs',
    classMethods: {
      associate: function(models) {
        Thief.hasOne(models.Game);
      }
    }
  });
  return Thief;
};