var server = require("express")();
var service = require("./api");
 
server.get('/greet/:name', function(req, res){
	res.status(200).send(service.greet(req.params.name));
});
 
module.exports = server;
