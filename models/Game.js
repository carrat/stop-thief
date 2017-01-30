'use strict';
module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define('Game', {
    num_players: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
    player_id: { type: DataTypes.INTEGER, allowNull: false},
    detective_id: DataTypes.INTEGER,
    thief_id: DataTypes.INTEGER,
    thief_starting_point: DataTypes.INTEGER,
    player_turns: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    game_completed: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'games',
    classMethods: {
      associate: function(models) {
        Game.belongsTo(models.User);
        Game.belongsTo(models.Detective);
        Game.belongsTo(models.Thief);
      }
    }
  });
  return Game;
};