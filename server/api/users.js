const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    res.send(401)
  } else {
    try {
      const users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email']
      })
      res.json(users)
    } catch (err) {
      next(err)
    }
  }
})

router.put('/', async (req, res, next) => {
  try {
    console.log('this is the req.body', req.body)
    const needToUpdate = await User.findByPk(req.body.id)
    const updatedProfile = await needToUpdate.update(req.body)
    res.json(updatedProfile)
  } catch (err) {
    next(err)
  }
})
