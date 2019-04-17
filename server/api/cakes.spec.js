const {expect} = require('chai')
const db = require('../db')
const Cake = db.model('cake')

const app = require('../index')
const agent = require('supertest')(app)

// defined in ../server/routes/cakeProduct.js
