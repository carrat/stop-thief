'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tile = sequelize.define('Tile', {
    tile_name: DataTypes.STRING,
    x1: DataTypes.INTEGER,
    y1: DataTypes.INTEGER,
    x2: DataTypes.INTEGER,
    y2: DataTypes.INTEGER,
    player_visit: DataTypes.BOOLEAN,
    thief_visit: DataTypes.BOOLEAN,
    building: DataTypes.INTEGER,
    space: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'tiles',
    classMethods: {
      associate: function(models) {
        Tile.belongsTo(models.Environment);
        Tile.belongsTo(models.Building);
      }
    }
  });
  return Tile;
};