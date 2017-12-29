/* Load the HTTP Library*/
const http = require("http");

/*Create an HTTP Server to handle Responses*/
http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
  	response.end();
}).listen(8888);

