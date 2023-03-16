const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('state', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    stateType: {
        type: DataTypes.ENUM("Available", "Rented", "Reserved", "Sold")
    }
  }, {
    timestamps: false
  });
};