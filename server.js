const express = require('express');
const next = require('next');

const PORT = 3800;

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  server.get('*', handle);

  server.listen(PORT, err => {
    if (err) throw err;
    dev && console.log(`> Ready on http://localhost:${PORT}`);
  });
});
