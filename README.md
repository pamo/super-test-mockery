# super-test-mockery
Needed a simple example of how to use [Mockery](https://github.com/mfncooper/mockery) to mock a service that gets called when we make a request to an API endpoint.
Using the [Mocha](http://mochajs.org) unit testing framework, and [Supertest](https://github.com/visionmedia/supertest) to assert on http requests.
The test should fail to show that the mock is being used and not the actual service.
