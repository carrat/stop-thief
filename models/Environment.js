'use strict';
module.exports = function(sequelize, DataTypes) {
  var Environment = sequelize.define('Environment', {
    env_name: DataTypes.STRING,
    image: DataTypes.STRING,
    sound: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'environments',
    classMethods: {
      associate: function(models) {
        Environment.hasOne(models.Tile);
      }
    }
  });
  return Environment;
};