const router = require('express').Router()
const neighbourhoodController = require('../controllers/manipulateNeighbourhoodData')

router.get('/', neighbourhoodController.showPeople)
router.get('/houses', neighbourhoodController.showHouses)
router.get('/houses/:id', neighbourhoodController.showOneHouse)
router.get('/:ageFrom/:ageTo', neighbourhoodController.showPeopleWithinAgeRange)
router.get('/household/:hHoldFrom/:hHoldTo', neighbourhoodController.showPeopleWithinAgeRange)
router.post('/', neighbourhoodController.addPerson)
router.post('/houses', neighbourhoodController.addHouse)

module.exports = router;

