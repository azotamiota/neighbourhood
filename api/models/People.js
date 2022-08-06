const neighbourhoodData = require('../data/connect_postgres') //TODO

class People {
    constructor(data) {
        this.id = data.id// TODO
        this.name = data.houseid// TODO
        this.name = data.name// TODO
        this.age = data.age// TODO
        this.householdPeople = data.householdPeople
    }

    static showAll() {
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

    static showWithinAgeRange() {
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
