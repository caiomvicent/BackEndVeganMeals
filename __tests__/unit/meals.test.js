const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')

describe('Meals', () => {
    afterAll(async () => {
        await truncate()
    })

    /*  it('Deve criar uma refeição', async () => {
 
         const response = await request(app)
             .post("/createMeals")
 
         expect(response.status).toBe(200)
     })
  */
    it('Deve procurar todas as refeiçoes', async () => {

        const response = await request(app)
            .get("/")


        expect(response.status).toBe(200)
    })
})