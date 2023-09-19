var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Enzo Ferreira dos Santos 19 de setembro de 2023, 12:28');
 
}).listen(8016); 