const neighbourhoodData = require('../dbConfig/init') //TODO
// console.log('neighbourhoodData: ', neighbourhoodData)

class People {
    constructor(data) {
        this.id = data.id
        this.houseid = data.houseid
        this.name = data.name
        this.age = data.age
        this.householdtotal = data.householdtotal
    }

    static showAll() {

        return neighbourhoodData.query('SELECT * FROM people')  // more readable method?
            .then(res => res.rows.map(person => new People(person)))
            .catch(error => console.log('error: ', error.message))

    //    return new Promise (async (resolve, reject) => {
    //     try {
    //         const peopleData = await neighbourhoodData.query('SELECT * FROM people')
    //         const people = peopleData.rows.map(person => new People(person))
    //         console.log('people @ People.showAll(): ', people)
    //         resolve (people)
    //     } catch (error) {
    //         console.log('error: ', error.message);
    //         reject('Unable to connect database')
    //     }
    //    })
    }

    static showOneById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                const onePerson = await neighbourhoodData.query('SELECT * FROM people WHERE id = $1', [id])
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

    static addPerson (houseid, name, age, householdtotal) {
        // console.log('hhould,name,age...blabla: ', houseid, name, age, householdtotal )
        // return neighbourhoodData.query('INSERT INTO people (houseid, name, age, householdtotal) VALUES ($1, $2, $3, $4);', [houseid, name, age, householdtotal])
        //     .then(person => new People(person.rows[0]))
        //     .catch(error => console.log('error: ', error.message))
        // return neighbourhoodData.query('INSERT ')

        return new Promise (async (resolve, reject) => {
            try {
                const addedPerson = await neighbourhoodData.query('INSERT INTO people (houseid, name, age, householdtotal) VALUES ($1, $2, $3, $4);', [houseid, name, age, householdtotal])
                resolve(addedPerson.rows[0])
            } catch (error) {
                  console.log('error in the Model: ', error.message);
                reject('Unable to connect database')
            }
        })
    }

    

}

module.exports = People
