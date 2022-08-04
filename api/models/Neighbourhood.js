const neighbourhoodData = require('../database/connect_postgres')

class Neighbourhood {
    constructor(data) {
        this.id = data.id// TODO
        this.houseid = data.houseid// TODO
        this.name = data.name// TODO
        this.age = data.age// TODO
        this.householdPeople = data.householdPeople
    }

    static showPeople() {
       return new Promise (async (resolve, reject) => {
        try {
            const peopleData = await neighbourhoodData.query('SELECT * FROM people')
            const people = peopleData.rows.map(person => new Neighbourhood(person))
            resolve (people)
        } catch (error) {
            console.log('error: ', error);
            reject('Unable to connect database')
        }
       })
    }

    static showHouses() {
    // TODO        
    }

    static showOnePerson() {
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
