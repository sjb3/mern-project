'use strict';

import config from './config';
import apiRouter from './api';
import express from 'express';
const server = express();

server.set('view engine', 'ejs');
server.get('/', (req, res) => {//server side routing
  res.render('index', {
    content: '...'
  });
});
// in Express no need to use fs or handle routes
server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {//success handler
  console.log('server up! <))))><~', config.port);
});
