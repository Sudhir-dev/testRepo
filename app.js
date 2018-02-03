#!/usr/bin/env node

const express = require('express');
//const log = require('./lib/log');
const app = express();



const port =  4000;

const server = app.listen( port, () => {
  console.log('Listening on port ' + server.address().port);
});

app.get('/',(req,res) => {
  res.json({message : 'Visited Home page'});
})
