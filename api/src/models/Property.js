const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('property', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    card_image: {
      type: DataTypes.TEXT
    },
    garage: {
      type: DataTypes.BOOLEAN
    },
    bedrooms: {
      type: DataTypes.INTEGER
    },
    bathrooms: {
      type: DataTypes.INTEGER
    },
    country: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    square_meter: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.INTEGER
    },
    propertyType: {
      type: DataTypes.ENUM("House", "Department", "Shop")
    },
    contract: {
      type: Sequelize.UUIDV4,
      references: {
        model: 'Contract',
        key: 'id'
      }
    },
    state: {
      type: Sequelize.UUIDV4,
      references: {
        model: 'State',
        key: 'id'
      }
    }
  }, {
    timestamps: false
  });
};