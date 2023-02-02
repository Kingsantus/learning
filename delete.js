const fs = require('fs');

/* this function create a directory with fs.mkdir, if(!fs.existsSync) will check if that particular dir exist to not create again */

if(!fs.existsSync('./new')){
    fs.mkdir('./new', (err) => {
        if(err) throw err;
        console.log('directory created');
    });
}

/* this function deletes the directory */
fs.rm('./new', { recursive: true}, (err) => {
    if(err) throw err;
    console.log('directory removed');
})
