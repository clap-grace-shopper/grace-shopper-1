const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const Cake = require('./cakeProduct')


const Orders = db.define('orders', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        defaultValue: 'open'
      }
})

module.exports = Orders