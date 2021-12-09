const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')


router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', userCtrl.getUser)

router.patch('/addcart', userCtrl.addCart)

module.exports = router

// AJOUTER auth, !!!!!!!!!!!!! après le /infor et /addcart!!!!!!