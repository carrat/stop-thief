'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tile = sequelize.define('Tile', {
    tile_name: DataTypes.STRING,
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER,
    player_visit: DataTypes.BOOLEAN,
    thief_visit: DataTypes.BOOLEAN,
    environment_id: DataTypes.INTEGER,
    street: DataTypes.INTEGER,
    building_id: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'tiles',
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Tile;
};