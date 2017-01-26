'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false},
    password: { type: DataTypes.STRING, allowNull: false},
    games_played: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    thieves_caught: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    money_earned: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    login_status: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    reset_password_link: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'users'-
  });
  return User;
};