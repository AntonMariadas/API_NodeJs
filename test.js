const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./index');


chai.should();
chai.use(chaiHttp);

describe('Companies API', () => {

    describe("GET /api/companies", () => {
        it("It should GET all companies", (done) => {
            chai.request(server)
                .get('/api/companies/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe("GET /api/companies/rome/label", () => {
        it("It should GET companies by rome", (done) => {
            const label = 'M1805';
            chai.request(server)
                .get('/api/companies/rome/' + label)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});
