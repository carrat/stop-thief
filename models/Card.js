'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    card_text: DataTypes.STRING,
    image: DataTypes.STRING,
    times_dealt: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    times_played: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'cards',
    classMethods: {
      associate: function(models) {
        Card.belongsTo(models.Cardtype);
      }
    }
  });
  return Card;
};