const People = require('../models/People')

async function showAll (req, res) {
        try {
            const allPeople = await People.showAll();
            res.json(allPeople);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

async function showOneById (req, res) {
    try {
        const onePerson = await People.showOneById(req.params.id);
        console.log('onePerson @ peopleController.js: ', onePerson)
        res.json(onePerson);
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
}

async function showPeopleWithinAgeRange (req, res) {
        try {
            const peopleWithinAgeRange = await People.showWithinAgeRange(req.params.ageFrom, req.params.ageTo);
            res.json(peopleWithinAgeRange);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }   
    }

async function showPeopleByHouseholdMembers (req, res) {
        try {
            const peopleByHousholdMembers = await People.showByHouseholdMembers(req.params.hHoldFrom, req.params.hHoldTo);
            res.json(peopleByHousholdMembers);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

async function addPerson (req, res) {
        try {
            console.log('req in controller: ', req.headers)
            const addedPerson = await People.addPerson(req.body.houseid, req.body.name, req.body.age, req.body.householdtotal);
            console.log('addedPerson: ', addedPerson)
            res.json(addedPerson);
        } catch (e) {
            console.log('error in the controller: ', e.message)
            res.status(500).json({ error: e.message });
        }
    }

    module.exports = {
        showAll,
        showOneById,
        showPeopleByHouseholdMembers,
        showPeopleWithinAgeRange,
        addPerson
    }
