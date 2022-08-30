const http = require('http');

const PORT = 3000;

const server = http.createServer((request, response) => {
  const { url } = request; // ==> const url = request.url;
  console.log(url);
  if (request.url === '/hole') {
    response.write('hole');
  } else if (request.url === '/adie') {
    response.write('Adie');
  } else {
    response.statusCode = 404;
    response.write('Page not found');
  }
  response.end();
});

server.listen(PORT, () => {
  console.log(`Listen port: ${PORT}`);
});
