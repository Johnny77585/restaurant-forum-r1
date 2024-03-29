const express = require('express')
const router = express.Router()
const admin = require('./modules/admin')
const restController = require('../../controllers/apis/restaurant-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')
const passport = require('../../config/passport')
const userController = require('../../controllers/apis/user-controller')

router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.use('/admin', admin)
router.get('/restaurants', restController.getRestaurants)
router.use('/', apiErrorHandler)
module.exports = router
