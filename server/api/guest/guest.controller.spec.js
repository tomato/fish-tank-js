'use strict';

var app = require('../../app');
var request = require('supertest-as-promised');
var Guest = require('./guest.model.js');
var should = require('should');

var validGuest = {
  name: {
    salutation: 'Mr',
    first: "Tom",
    last: "Howlett"
  },
  address: {
    streetAddress: "The house\nThe street\nThe village",
    town: "The town",
    county: "The county",
    postcode: "PO2 C0DE",
  },
  phone: "+ 44 123",
  mobile: "+44 345",
  email: "tom@tomhowlett.com"
  // history: [
  //   {
  //     type: 'communication',
  //     date: '2012-07-07',
  //     method: 'email',
  //     notes: 'had a nice chat'
  //   }
    // },
    // {
    //   type: 'visit',
    //   startDate: '2012-10-10',
    //   endDate: '2012-10-17',
    //   activities: [
    //     {
    //       type: 'stay',
    //       roomType: 'single',
    //       rate: 100.00,
    //       totalSpend: 700.00
    //     },
    //     {
    //       type: 'meal',
    //       date: '2012-10-11',
    //       restaurant: 'Joe\'s Place',
    //       totalSpend: 100.00
    //     },
    //     {
    //       type: 'spa',
    //       date: '2012-10-12',
    //       treatments: ['massage', 'swimming'],
    //       totalSpend: 200.00
    //     }
    //   ]
    // }
  // ]
}

describe('guests api', function(){
  afterEach(function(done){
    Guest.remove({}, function(err){
       done(err)});
  });

  describe('GET /api/guests/:id', function() {
    it('should respond with a guest', function(done) {
      Guest.createAsync(validGuest)
        .then(function callApi(guest) {
          return request(app)
            .get('/api/guests/' + guest._id)
            .expect(200)
            .expect('Content-Type', /json/);
        })
        .then(function checkResponse(res) {
          res.body.should.containEql(validGuest);
          done();
        })
        .catch(done);
    });

    it('should respond with a 404 if no guest', function(done) {
       request(app)
            .get('/api/guests/507f1f77bcf86cd799439011')
            .expect(404)
            .then(function(){done()})
            .catch(done);
        })
  });

  describe('GET /api/guests', function() {
    it('should respond with a list of guests', function(done) {
      request(app)
        .get('/api/guests')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function(res) {
          res.body.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  describe('POST /api/guests', function() {
    it('should create with a guest', function(done) {
      request(app)
        .post('/api/guests')
        .send(validGuest)
        .expect(201)
        .expect('Content-Type', /json/)
        .then(function(res) {
          res.body.should.containEql(validGuest);
          return Guest.findByIdAsync(res.body._id);
        })
        .then(function(savedGuest){
          savedGuest.toObject().should.containEql(validGuest);
          return done();
        })
        .catch(done);
      });

      it('should not create invalid guest', function(done) {
        request(app)
          .post('/api/guests')
          .send({'x':'y'})
          .expect(400)
          .then(function(res) {
            res.body.name.should.eql('ValidationError');
            done();
          })
          .catch(done);
        });
  });

  describe('PUT /api/guests/:id', function() {
    it('should update a  guest', function(done) {
      Guest.createAsync(validGuest)
      .then(function(savedGuest){
        savedGuest.name.first = "Thomas";
        var updatedGuest = savedGuest;
        return request(app)
          .put('/api/guests/' + savedGuest._id)
          .send(updatedGuest)
          .expect(200)
          .expect('Content-Type', /json/)
      })
      .then(function(res) {
        res.body[0].name.first.should.eql("Thomas");
        return Guest.findByIdAsync(res.body[0]._id);
      })
      .then(function(savedGuest){
        savedGuest.toObject().name.first.should.eql("Thomas");
        return done();
      })
      .catch(done);
    });
  });

  describe('DELETE /api/guests/:id', function() {
    it('should delete a  guest', function(done) {
      Guest.createAsync(validGuest)
      .then(function(savedGuest){
        return request(app)
          .delete('/api/guests/' + savedGuest._id)
          .expect(204)
      })
      .then(function(res){ done();})
      .catch(done);
    });

    it('should 404 if guest doesnt exist', function(done) {
      request(app)
          .delete('/api/guests/507f1f77bcf86cd799439011')
          .expect(404)
          .then(function(res){ done();})
          .catch(done);
    });
  });
});
