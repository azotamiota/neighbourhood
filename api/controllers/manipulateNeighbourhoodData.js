const Neighbourhood = require('../models/Neighbourhood')

function showPeople () {
        try {
        const allPeople = Neighbourhood.showPeople();
        res.json(allPeople);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }// TODO
    }

function showHouses() {
        try {
        const allHouses = Neighbourhood.showHouses();
        res.json(allHouses);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }// TODO        
    }

function showOnePerson() {
        try {
        const onePerson = Neighbourhood.showOnePerson();
        res.json(onePerson);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }// TODO
    }

function showOneHouse() {
        try {
        const oneHouse = Neighbourhood.showOneHouse();
        res.json(oneHouse);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }// TODO
    }

function showPeopleWithinAgeRange() {
        try {
        const peopleWithinAge = Neighbourhood.showPeopleWithinAgeRange();
        res.json(peopleWithinAge);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }// TODO
    }

function showPeopleByHouseholdMembers () {
        try {
        const peopleByHousholdMembers = Neighbourhood.showPeopleByHouseholdMembers();
        res.json(peopleByHousholdMembers);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }// TODO
    }

    function addPerson () {
        try {
            const addPerson = Neighbourhood.addPerson()
            res.json(addPerson)
        } catch (error) {
        res.status(500).json({ error: e.message });
        }
    }

    function addHouse () {
        try {
            const addHouse = Neighbourhood.addHouse()
            res.json(addHouse)
        } catch (error) {
        res.status(500).json({ error: e.message });
        }
    }

    module.exports = {
        showHouses,
        showOneHouse,
        showOnePerson,
        showPeople,
        showPeopleByHouseholdMembers,
        showPeopleWithinAgeRange,
        addPerson,
        addHouse
    }
