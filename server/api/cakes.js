const router = require('express').Router()
const {Cake} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cakes = await Cake.findAll()
    res.json(cakes)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const cake = await Cake.findByPk(req.params.id)
    res.json(cake)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    console.log('this is the req.body', req.body)
    const deleteRes = await Cake.destroy({
      where: {
        id: req.body.id
      }
    })
    res.json(deleteRes)
  } catch (err) {
    next(err)
  }
})
