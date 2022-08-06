const router = require('express').Router()
const housesController = require('../controllers/housesController')

router.get('/', housesController.showAll)
router.get('/:id', housesController.showOneById)
router.post('/', housesController.addHouse)

module.exports = router;
