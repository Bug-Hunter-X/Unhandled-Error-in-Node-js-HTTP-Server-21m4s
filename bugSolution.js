const http = require('http');

const server = http.createServer((req, res) => {
  // Robust error handling
  try {
    const result = someFunctionThatMightThrowAnError();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

function someFunctionThatMightThrowAnError() {
  // Simulate an error condition
  if (Math.random() < 0.5) {
    throw new Error('Simulated Error');
  }
  return 'Success';
}