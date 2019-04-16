const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Cake = db.define('cake', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
        imageUrl: {
        type: Sequelize.STRING,
        default:
          "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg",
        validate: {
          isUrl: true
        }
      },
      price: {
        type: Sequelize.INTEGER,
        default: 50
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        default: "A delicious cake!",
        validate: {
          notEmpty: true
        }
      },
      ingredients: {
        type: Sequelize.TEXT,
        allowNull: false,
        default: "Made with love!",
        validate: {
          notEmpty: true
        }
      }
})


module.exports = Cake