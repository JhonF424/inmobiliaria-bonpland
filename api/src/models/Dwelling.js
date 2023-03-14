const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dwelling', {
    
  }, {
    timestamps: false
  });
};