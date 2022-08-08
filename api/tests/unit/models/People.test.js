const People = require('../../../models/People')

jest.mock('../../../models/People')

const pg = require('pg');
jest.mock('pg');

const neighbourhoodData = require('../../../dbConfig/init')

describe('People', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('All', () => {
        test('1. retrieve all people from db', async () => {
            jest.spyOn(neighbourhoodData, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await People.showAll();
            expect(all).toBeTruthy()
        })
    })
})
