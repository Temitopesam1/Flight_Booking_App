const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Flight Booking App API', () => {
    it('should get flights', (done) => {
        chai.request(app)
            .get('/flights')
            .end((err, res) => {
                expect(res).to.have.status(200);
                // We can add more assertions here
                done();
            });
    });

    it('should get a single flight', (done) => {
        chai.request(app)
            .get('/flights/1')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should confirm booking', (done) => {
        chai.request(app)
            .post('/booking')
            .send({ flight_id: 1 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should confirm payment', (done) => {
        chai.request(app)
            .post('/payment')
            .send({ flight_id: 1 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    // We can also add more test cases here
});
