const Houses = require('../models/Houses.js')

async function showAll (req, res) {
        try {
            const allHouses = await Houses.showAll();
            res.json(allHouses);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

async function showOneById (req, res) {
    try {
        const oneHouse = await Houses.showOneById(req.params.id);
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
