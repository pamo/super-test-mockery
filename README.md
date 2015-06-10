# super-test-mockery
Needed a simple example of how to use [Mockery](https://github.com/mfncooper/mockery) to mock a service that gets called when we make a request to an API endpoint.
Using the [Mocha](http://mochajs.org) unit testing framework, and [Supertest](https://github.com/visionmedia/supertest) to assert on http requests.

The tests in test/server.test.js have 3 examples:

* Mocked service
* Real service
* Re-mocked service with a different mock

It seems that to Mock you need to follow these steps:

1. Register a mock with Mockery 
2. Enable Mockery
3. Re-require the modules that are under test so that the modules to mock are intercepted by mockery when they are required in the modules under test.
