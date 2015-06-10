var server, 
    mockService,
    request, 
    sinon = require('sinon'),
    mockery = require('mockery');
 
describe('GET /greet', function(){
  before(function(){
    mockService = {
      greet: function(name){
	return {
	  message: 'WTF!'
	};
      }
    };

    mockery.registerMock('./api', mockService);
    
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });

    request = require('supertest');
    server = require('server');

  });

  afterEach(function(){
    mockery.disable();
  });
  
  it('respond with json', function(done){

    request(server)
      .get('/greet/pam')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({message: 'Hello, pam!'}, done); 
  });
});
