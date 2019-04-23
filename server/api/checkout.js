// const router = require('express').Router()
// const {Orders} = require('../db/models')
// module.exports = router

// router.post('/', async (req, res, next) => {
//   console.log('req.quantity:', req.body)

//   //if (!req.user)
//   try {
//     const order = await Orders.create({
//         include: [{model: ordersKey}]
//     })
//     console.log('order:', order)
//   } catch (err) {
//     next(err)
//   }
// })
