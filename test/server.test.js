var server, 
    request, 
    sinon = require('sinon'),
    mockery = require('mockery');

var mockService = {
      greet: function(name){
	return {
	  message: 'WTF!'
	};
      }
};
 
describe('GET /greet', function(){
  beforeEach(function(){
    mockery.registerMock('./api', mockService);
    request = require('supertest');
    server = require('server');
  });

  afterEach(function(){
    mockery.deregisterAll();
    mockery.disable();
  });
  
  it('respond with json from the mock', function(done){
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    request = require('supertest');
    server = require('server');

    request(server)
      .get('/greet/pam')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({message: 'WTF!'}, done); 
  });

  it('respond with json from the actual service', function(done){

    request(server)
      .get('/greet/pam')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({message: 'Hello, pam!'}, done); 
  });

  it('respond with json from a different mock', function(done){
    mockery.registerMock('./api', {
      greet: function(name){
	return {
	  message: 'Hola, ' + name + '!'
	};
      }
    });

    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });

    request = require('supertest');
    server = require('server');

    request(server)
      .get('/greet/pam')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({message: 'Hola, pam!'}, done); 
  });

});
