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

    static async showAll() {

        return neighbourhoodData.query('SELECT * FROM people')
            .then(res => res.rows.map(person => new People(person)))
            .catch(error => console.log('error: ', error.message))

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

    static async showWithinAgeRange(ageFrom, ageTo) {

        return neighbourhoodData.query('SELECT * FROM people')
            .then(peopleData => {
                return peopleData.rows.filter(person => {
                    if (person.age >= ageFrom && person.age <= ageTo) {
                          return new People(person)}
                    }
                )
            })
            .catch(e => console.log(e))
                
    }

    static showByHouseholdMembers (householdFrom, householdTo) {
        return new Promise (async (resolve, reject) => {
            try {
                const peopleData = await neighbourhoodData.query('SELECT * FROM people')
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

    static async addPerson (houseid, name, age, householdtotal) {
        
        return neighbourhoodData.query('INSERT INTO people (houseid, name, age, householdtotal) VALUES ($1, $2, $3, $4);', [houseid, name, age, householdtotal])
            .then(person => person)
            .catch(error => console.log('error in Model: ', error))
        
    }

    

}

module.exports = People
