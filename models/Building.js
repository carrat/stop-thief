'use strict';
module.exports = function(sequelize, DataTypes) {
  var Building = sequelize.define('Building', {
    building_name: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'buildings'
  });
  return Building;
};