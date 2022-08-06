const neighbourhoodData = require('../dbConfig/init') //TODO

class Houses {
    constructor(data) {
        this.id = data.id
        this.houseid = data.houseid// TODO
        this.owner = data.owner
    }

    static showAll() {
       return new Promise (async (resolve, reject) => {
        try {
            const peopleData = await neighbourhoodData.query('SELECT * FROM people')
            const people = peopleData.rows.map(person => new People(person))
            resolve (people)
        } catch (error) {
            console.log('error: ', error.message);
            reject('Unable to connect database')
        }
       })
    }

    static showOneById() {
        return new Promise (async (resolve, reject) => {
            try {
                const onePerson = await neighbourhoodData.query('SELECT * FROM people WHERE id = $1', [id])
                resolve(onePerson)
            } catch (error) {
                  console.log('error: ', errormessage);
            reject('Unable to connect database')
            }
        })
    }

    static addHouse () {
        // TODO
    }

}

module.exports = Houses
