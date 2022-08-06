const router = require('express').Router()
const indexController = require('../controllers/indexController')

router.get('/houses', neighbourhoodController.showHouses)
router.get('/houses/:id', neighbourhoodController.showOneHouse)
router.post('/houses', neighbourhoodController.addHouse)
