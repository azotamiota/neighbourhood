const People = require('../models/People')

async function showAll (req, res) {
        try {
            const allPeople = await People.showAll();
            console.log('allPeople: ', allPeople)
            res.json(allPeople);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

async function showOneById (req, res) {
    try {
        const onePerson = await People.showOneById(req.params.id);
        res.json(onePerson);
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
}

async function showPeopleWithinAgeRange (req, res) {
        try {
            const peopleWithinAgeRange = await People.showWithinAgeRange();
            res.json(peopleWithinAgeRange);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }   
    }

async function showPeopleByHouseholdMembers (req, res) {
        try {
            const peopleByHousholdMembers = await People.showByHouseholdMembers();
            res.json(peopleByHousholdMembers);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

async function addPerson (req, res) {
        try {
            const addedPerson = await People.addPerson();
            res.json(addedPerson);
        } catch (e) {
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
