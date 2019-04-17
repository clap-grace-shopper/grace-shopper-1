'use strict'

const db = require('../server/db')

const Cake = require('../server/db/models/cakeProduct')
const User = require('../server/db/models/user')
const OrderedItems = require('../server/db/models/orderedItems')
const Transaction = require('../server/db/models/transactions')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const cake = await Promise.all([
    Cake.create({
      name: 'I Like Big Bundts',
      imageUrl:
        'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg',
      price: 500,
      description: 'This is a bad ass cake.',
      ingredients: 'eggs, apples, sunshine'
    }),
    Cake.create({
      name: 'All You Need is Cake',
      imageUrl:
        'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg',
      price: 500,
      description: 'Cake is all you need',
      ingredients: 'eggs, apples, sunshine'
    }),
    Cake.create({
      name: 'Cake My Day',
      imageUrl:
        'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg',
      price: 500,
      description: 'Do that one more time, cake my day',
      ingredients: 'eggs, apples, sunshine'
    }),
    Cake.create({
      name: 'Cake by the Ocean',
      imageUrl:
        'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg',
      price: 500,
      description: 'I keep on hopin',
      ingredients: 'eggs, apples, sunshine'
    }),
    Cake.create({
      name: 'Birthday Cake',
      imageUrl:
        'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg',
      price: 500,
      description: 'Oh na na, whats your name',
      ingredients: 'eggs, apples, sunshine'
    })
  ])

  const user = await Promise.all([
    User.create({
      firstName: 'Susette',
      lastName: 'Susette',
      email: 'susette@hotmail.com',
      password: 'adlkjfdafd13290',
      salt: 'akdfjlaadffd243',
      googleId: 'alkdjf',
      address: '5 Hanover Sq NY NY 12345',
      isAdmin: 'false'
    }),
    User.create({
      firstName: 'Larry',
      lastName: 'Susette',
      email: 'lsusette@hotmail.com',
      password: 'afdadlkjdf234',
      salt: ';aefd;j;fda76',
      googleId: 'oin9k',
      address: '5 Hanover Sq NY NY 12345',
      isAdmin: 'false'
    }),
    User.create({
      firstName: 'Priyanka',
      lastName: 'Garg',
      email: 'priyanka@hotmail.com',
      password: 'adkfjafdi876',
      salt: 'jdifueae',
      googleId: 'adkfjafdji',
      address: '5 Hanover Sq NY NY 12345',
      isAdmin: 'false'
    })
  ])

  const transaction = await Promise.all([
    Transaction.create({
      status: 'open'
    })
  ])

  const orderedItem = await Promise.all([
    OrderedItems.create({
      quantity: 5
    })
  ])

  console.log(`seeded ${user.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
