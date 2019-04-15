
// Import moduels 
const db = knex(dbconfig.development);

const knex = require('knex');
const dbconfig = require('./knexfile');


const server = require('./server.js');
const request = require('supertest');






describe('/names', () => {
    it('responds with 200', async () => {

        const response = await request(server).get('/names');


        
        expect(response.status).toBe(200)
    })



    
    it('responds with json', async () => {
    
        const response = await request(server).get('/names');



        
        expect(response.type).toMatch(/json/i)
    })



    it('sends the correct response object', async () => {
    
        const response = await request(server).get('/names');


        
        expect(response.body).toEqual([])
    })

})




describe('post to /names', () => {

    it('responds with 201 when body is correct', async () => {


        const body = { name: 'fluffy' }

        const response = await request(server).post('/names').send(body);


        
        expect(response.status).toBe(201)
    })



    
    it('responds with 400 when body is missing data', async () => {
    
        const body = {}
    
        const response = await request(server).post('/names').send(body);

    
        expect(response.status).toBe(400)
    
    })



})


// Delete
describe('delete to /names', () => {

    it('responds with id of deleted and responds with 201 when cat deleted', async () => {
        const response = await request(server).delete('/names/1');

        expect(response.body).toBe(1);

        expect(response.status).toBe(201)

    })


    
    it('responds with 404 when cat cant be deleted', async () => {
    
        const response = await request(server).del('/names').send();
    
    
        expect(response.status).toBe(404)
    
    })
}) 

