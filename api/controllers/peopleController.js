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
            console.log('req.body in the controller: ', req.body)
            const houseid = req.body.houseid
            const name = req.body.name
            const age = req.body.age
            const householdTotal = req.body.householdtotal
            await People.addPerson(houseid, name, age, householdTotal);
            res.json({
                added_person : {
                    houseid : houseid,
                    name: name,
                    age: age,
                    householdtotal: householdTotal
                }
            });
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
