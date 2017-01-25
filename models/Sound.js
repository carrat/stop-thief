'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sound = sequelize.define('Sound', {
    sound_name: DataTypes.STRING,
    sound_file: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'sounds',
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Sound;
};