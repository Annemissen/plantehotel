require('should');
const request = require('supertest');
const { app } = require("../testApp");


describe('integrationsTest', () => {
    it("get('/xyz')", async () => {
        await request(app)
            .get('/xyz')
            .expect(404)
            .expect('Content-Type', /html/)
    });

    it("post('/')", async () => {
        let response = await request(app)
            .post('/')
            .send({ firstname: "test4" })
            .expect(404)
    });

    it("post('/api/customers')", async () => {
        let response = await request(app)
            .post('/api/customers')
            .send({ firstname: "Peter" })
            .expect(200)
    });


})