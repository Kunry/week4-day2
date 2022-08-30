const express = require('express');

const app = express();

app.use(express.static('public')); // --> IMPORTANTE

app.get('/', (request, response, next) => {
  console.log(request.headers);
  response.sendFile( __dirname + '/views/home.html');
})

app.get('/otra', (request, response, next) => {
  response.sendFile(__dirname + '/views/cat-page.html');
})

app.listen(3000, () => {
  console.log(`Listen to Port: 3000`);
});
