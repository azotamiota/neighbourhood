const router = require('express').Router()
const peopleController = require('../controllers/peopleController')

router.get('/', peopleController.showAll)
router.get('/:id', peopleController.showOneById)
router.get('/age/:ageFrom/:ageTo', peopleController.showPeopleWithinAgeRange)
router.get('/household/:hHoldFrom/:hHoldTo', peopleController.showPeopleByHouseholdMembers)
router.post('/', peopleController.addPerson)

module.exports = router;

