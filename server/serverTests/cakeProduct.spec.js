const {expect} = require('chai')

const db = require('../db/db')
const Cake = db.model('cake')

const app = require('../index')
const agent = require('supertest')(app)

describe('Cake Routes', () => {
  // defined in ../server/models/Cake.js
  describe('cake model', () => {
    describe('Validations', () => {
      it('requires `name`', async () => {
        const cake = Cake.build()

        try {
          await cake.validate()
          throw Error(
            'validation was successful but should have failed without `name`'
          )
        } catch (err) {
          expect(err.message).to.contain('name cannot be null')
        }
      })

      it('requires `name` to not be an empty string', async () => {
        const cake = Cake.build({
          name: ''
        })

        try {
          await cake.validate()
          throw Error(
            'validation was successful but should have failed if name is an empty string'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation error')
          /* handle error */
        }
      })
    })
  })
})

describe('Cake Routes', () => {
  let storedCakes

  const cakeData = [
    {
      name: 'Pavlova',
      description:
        'Larkins favorite cake - her mother made one for every birthday!',
      ingredients: 'Lots of eggs and love'
    },
    {
      name: 'Lemon Strawberry Shortcake',
      description: 'This one is the favorite of Chelsi!',
      ingredients: 'Meyer lemons, preferably'
    }
  ]

  beforeEach(async () => {
    const createdCakes = await Cake.bulkCreate(cakeData)
    storedCakes = createdCakes.map(cake => cake.dataValues)
  })

  // Route for fetching all campuses
  describe('GET `/api/cakes`', () => {
    it('serves up all Cakes', async () => {
      const response = await agent.get('./api/cakes').expect(200)
      expect(response.body).to.have.length(5)
      expect(response.body[0].name).to.equal(storedCakes[0].name)
    })
  })

  

  describe('GET `/api/cakes/:id`', () => {
    it('serves up a single cakes by its `id`', async () => {
      const response = await agent.get('./api/cakes/2').expect(200)
      expect(response.body.name).to.equal('Lemon Strawberry Shortcake')
    })
  })
})

// Route for fetching a single campus
