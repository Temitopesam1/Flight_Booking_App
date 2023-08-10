import { use, expect as _expect, request } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

use(chaiHttp);
const expect = _expect;

describe('Flight Booking App API', () => {
    it('should get flights', (done) => {
        request(app)
            .get('/flights')
            .end((err, res) => {
                expect(res).to.have.status(200);
                // Add more assertions based on your expected API response
                done();
            });
    });

    it('should get a single flight', (done) => {
        request(app)
            .get('/flights/1')
            .end((err, res) => {
                expect(res).to.have.status(200);
                // Add more assertions based on your expected API response
                done();
            });
    });

    it('should confirm booking', (done) => {
        request(app)
            .post('/booking')
            .send({ flight_id: 1 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                // Add more assertions based on your expected API response
                done();
            });
    });

    it('should confirm payment', (done) => {
        request(app)
            .post('/payment')
            .send({ flight_id: 1 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                // Add more assertions based on your expected API response
                done();
            });
    });

    // Add more test cases
});
