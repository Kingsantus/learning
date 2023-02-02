const fs = require('fs');
//import {readFile } from 'node:fs';

fs.readFile('./name.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

console.log('hello');

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})