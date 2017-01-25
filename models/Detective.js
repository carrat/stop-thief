'use strict';
module.exports = function(sequelize, DataTypes) {
  var Detective = sequelize.define('Detective', {
    detective_name: DataTypes.STRING,
    image: DataTypes.STRING,
    games_used: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'detectives',
    classMethods: {
      associate: function(models) {
        Detective.hasOne(models.Game);
      }
    }
  });
  return Detective;
};