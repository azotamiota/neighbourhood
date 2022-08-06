const neighbourhoodData = require('../dbConfig/init') //TODO
// console.log('neighbourhoodData: ', neighbourhoodData)

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

    static showOneById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                const onePerson = await neighbourhoodData.query('SELECT * FROM people WHERE id = $1', [id])
                // console.log('onePerson @ People.js model: ', onePerson)
                resolve(onePerson.rows[0])
            } catch (error) {
                  console.log('error: ', error.message);
            reject('Unable to connect database')
            }
        })
    }

    static showWithinAgeRange(ageFrom, ageTo) {
        return new Promise (async (resolve, reject) => {
            try {
                const peopleData = await neighbourhoodData.query('SELECT * FROM people')
                const peopleWithinAgeRange = peopleData.rows.filter(person => {
                    if (person.age >= ageFrom && person.age <= ageTo) {
                          return new People(person)}
                    }
                )
                resolve(peopleWithinAgeRange)
            } catch (error) {
                console.log('error: ', error.message);
                reject('Unable to connect database')
            }
        })     
    }

    static showByHouseholdMembers (householdFrom, householdTo) {
        return new Promise (async (resolve, reject) => {
            try {
                const peopleData = await neighbourhoodData.query('SELECT * FROM people')
                console.log('peopleData.rows: ', peopleData.rows)
                const peopleFilteredHousehold = peopleData.rows.filter(person => {
                    if (person.householdtotal >= householdFrom && person.householdtotal <= householdTo) {
                          return new People(person)}
                    }
                )
                resolve(peopleFilteredHousehold)
            } catch (error) {
                console.log('error: ', error.message);
                reject('Unable to connect database')
            }
        })  
    }

    static addPerson () {
        // TODO
    }

    static addHouse () {
        // TODO
    }

}

module.exports = People
