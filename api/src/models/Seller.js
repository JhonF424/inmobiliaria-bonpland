const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('seller', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
};