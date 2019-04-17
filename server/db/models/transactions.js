const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    defaultValue: 'open'
  }
})

// value goes from open to closed, when:
// customer clicks 'submit order' button
// on click, hit route that changes the status

module.exports = Transaction
