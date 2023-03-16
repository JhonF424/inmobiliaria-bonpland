const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('contract', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    contractType: {
        type: DataTypes.ENUM("Rent", "Buy", "Sale")
    }
  }, {
    timestamps: false
  });
};