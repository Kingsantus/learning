const fs = require('fs');

const rs = fs.createReadStream('./lorem.txt'); //read file 

const ws = fs.createWriteStream('./copied.txt'); //copy file

/* rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
}) */

rs.pipe(ws); //faster method