const {expect} = require('chai')

const db = require('../db/db')
const Cake = db.model('cake')

const app = require('../index')
const agent = require('supertest')(app)

describe('Cake Tests', () => {
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
  beforeEach(() => {
    return db.sync({force: true})
  })

  beforeEach(() => {
    return Cake.create({
      name: 'Pavlova',
      description:
        'Larkins favorite cake - her mother made one for every birthday!',
      ingredients: 'Lots of eggs and love'
    })
  })

  //Route for fetching all campuses
  describe('GET `/api/cakes`', () => {
    it('serves up all Cakes', async () => {
      const response = await agent.get('/api/cakes').expect(200)
      console.log(response.body)
      expect(response.body).to.have.length(1)
      expect(response.body[0].name).to.equal('Pavlova')
    })
  })

  describe('GET `/api/cakes/:id`', () => {
    it('serves up a single cakes by its `id`', async () => {
      const response = await agent.get('/api/cakes/1').expect(200)
      expect(response.body.name).to.equal('Pavlova')
    })
  })
})
