'use strict'
const db = require('../server/db')
const Cake = require('../server/db/models/cakeProduct')
const User = require('../server/db/models/user')
const Orders = require('../server/db/models/orders')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const cake = await Promise.all([
    Cake.create({
      name: 'I Like Big Bundts',
      imageUrl:
        'https://prods3.imgix.net/images/articles/2015_11/Hero-Nigella-Lawson-Baking-Five-Spice-Bundt-Cake-Cooking-Sweet-Dessert-Recipe.jpg?auto=format%2Ccompress&dpr=2&ixjsv=2.2.3&q=50&w=750',
      price: 500,
      description: 'This is a bad ass cake.',
      ingredients: 'eggs, apples, sunshine'
    }),
    Cake.create({
      name: 'All You Need is Cake',
      imageUrl:
        'https://luluthebaker.com/wp-content/uploads/2017/06/peanut-butter-chocolate-layer-cake-4.jpg',
      price: 500,
      description: 'Cake is all you need',
      ingredients: 'eggs, apples, sunshine'
    }),
    Cake.create({
      name: 'Cake My Day',
      imageUrl:
        'https://assets.epicurious.com/photos/55b7c1e4a188eea213e6511e/6:4/w_620%2Ch_413/354211_three-layer-berry-pavlova_6x4.jpg',
      price: 500,
      description: 'Do that one more time, cake my day',
      ingredients: 'eggs, apples, sunshine'
    }),
    Cake.create({
      name: 'Cake by the Ocean',
      imageUrl:
        'https://patisseriepetitlapin.com/wp-content/uploads/2015/03/GATEAU_Turquoise_degrade_00.jpg',
      price: 500,
      description: 'I keep on hopin',
      ingredients: 'eggs, apples, sunshine'
    }),
    Cake.create({
      name: 'Birthday Cake',
      imageUrl:
        'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201849/0523/img55c.jpg',
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

  const orders = await Promise.all([
    Orders.create({
      quantity: 1,
      status: 'closed',
      userId: 1
    }),
    Orders.create({
      quantity: 2,
      status: 'closed',
      userId: 2
    }),
    Orders.create({
      quantity: 1,
      status: 'closed',
      userId: 3
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
