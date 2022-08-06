const neighbourhoodData = require('../dbConfig/init') //TODO

class Houses {
    constructor(data) {
        this.houseid = data.houseid// TODO
        this.addressid = data.addressid
        this.owner = data.owner
    }

    static showAll() {
       return new Promise (async (resolve, reject) => {
        try {
            const housesData = await neighbourhoodData.query('SELECT * FROM houses')
            console.log('housesData.rows: ', housesData.rows)
            const houses = housesData.rows.map(house => new Houses(house))
            console.log('houses: ', houses)
            resolve (houses)
        } catch (error) {
            console.log('error: ', error.message);
            reject('Unable to connect database')
        }
       })
    }

    static showOneById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                const oneHouse = await neighbourhoodData.query('SELECT * FROM houses WHERE houseid = $1', [id])
                resolve(oneHouse.rows[0])
            } catch (error) {
                  console.log('error: ', error.message);
            reject('Unable to connect database')
            }
        })
    }

    static addHouse () {
        // TODO
    }

}

module.exports = Houses
