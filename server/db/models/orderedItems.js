const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const Cake = require('./cakeProduct')


const OrderedItems = db.define('orderedItem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
})



module.exports = OrderedItems

// order (id, user, date, total)
// no total
// open / closed (handles carts and orders)

// closed orders === order history

// orderItems 
// id, quantity, reference to transaction