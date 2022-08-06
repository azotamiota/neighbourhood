const People = require('../models/People')

function showAll () {
        try {
            const allPeople = People.showAll();
            res.json(allPeople);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

function showOneById () {
    try {
        const onePerson = People.showOneById();
        res.json(onePerson);
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
}

function showPeopleWithinAgeRange() {
        try {
            const peopleWithinAgeRange = People.showWithinAgeRange();
            res.json(peopleWithinAgeRange);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }   
    }

function showPeopleByHouseholdMembers() {
        try {
            const peopleByHousholdMembers = People.showByHouseholdMembers();
            res.json(peopleByHousholdMembers);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

function addPerson() {
        try {
            const addedPerson = People.addPerson();
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
