'use strict';

import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';

const server = express();


server.use(sassMiddleWare({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));
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
