const neighbourhoodData = require('../dbConfig/init') //TODO

class People {
    constructor(data) {
        this.id = data.id
        this.houseid = data.houseid// TODO
        this.name = data.name// TODO
        this.age = data.age// TODO
        this.householdPeople = data.householdPeople
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

    static showOnePerson() {
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

    static showWithinAgeRange() {
    // TODO        
    }


    static showOneHouse() {
        // TODO
    }

    static showPeopleWithinAgeRange() {
        // TODO
    }

    static showPeopleByHouseholdMembers () {
        // TODO
    }

    static addPerson () {
        // TODO
    }

    static addHouse () {
        // TODO
    }

}

module.exports = Neighbourhood
