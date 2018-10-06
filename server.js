const express = require('express');
const next = require('next');

const DEAFULT_PORT = 3800;

const dev = process.env.NODE_ENV !== 'production';
const next = next({ dev });
const handle = next.getRequestHandler();

next.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => handle(req, res));

  server.listen(DEAFULT_PORT, err => {
    if (err) throw err;
    dev && console.log(`> Ready on http://localhost:${port}`);
  });
});
