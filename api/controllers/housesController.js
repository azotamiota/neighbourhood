const Houses = require('../models/Houses.js')

function showAll () {
        try {
            const allHouses = Houses.showAll();
            res.json(allHouses);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

function showOneById (id) {
    try {
        const oneHouse = Houses.showOneById(id);
        res.json(oneHouse);
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
}


function addHouse() {
        try {
            const addedHouse = Houses.addHouse();
            res.json(addedHouse);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    module.exports = {
        showAll,
        showOneById,
        addHouse
    }
