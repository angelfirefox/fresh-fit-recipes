const http = require('http');
const url = 'http://127.0.0.1:3000/images/recipes/green-protein-smoothie.jpg';

http.get(url, (res) => {
  console.log('status', res.statusCode);
  res.resume();
}).on('error', (err) => {
  console.error('err', err.message);
  process.exit(1);
});