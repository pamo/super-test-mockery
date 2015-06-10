# super-test-mockery
Needed a simple example of how to use [Mockery](https://github.com/mfncooper/mockery) to mock a service that gets called when we make a request to an API endpoint.
Using the [Mocha](http://mochajs.org) unit testing framework, and [Supertest](https://github.com/visionmedia/supertest) to assert on http requests.

The test should fail to show that the mock is being used and not the actual service.
```sh
GET /greet
    1) respond with json


  0 passing (166ms)
  1 failing

  1) GET /greet respond with json:

      Error: expected { message: 'Hello, pam!' } response body, got { message: 'WTF!' }
      + expected - actual

       {
      -  "message": "WTF!"
      +  "message": "Hello, pam!"
       }
```
