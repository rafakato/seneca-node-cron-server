'use strict';

const seneca = require('seneca')();
const cron = require('seneca-node-cron');

seneca.use(cron);

seneca.client({
  host: process.env.CLIENT_HOST || null,
  port: process.env.CLIENT_PORT || 3000,
  type: process.env.CLIENT_TYPE || 'tcp',
  pin: process.env.CLIENT_PINS ? process.env.CLIENT_PINS.split('|') : []
});

seneca.listen({
  host: process.env.LISTEN_HOST || null,
  port: 4000,
  type: process.env.LISTEN_TYPE || 'tcp'
});
