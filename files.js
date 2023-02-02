const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'name.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

console.log('hello');

fs.writeFile(path.join(__dirname, 'word.txt'), 'Coding is very fun, it just the syntax giving me headache', (err) => {
    if(err) throw err;
    console.log('write complete');

    fs.appendFile(path.join(__dirname, 'word.txt'), '\n\nthe better you become the more fun', (err) => {
        if(err) throw err;
        console.log('apend complete');

        fs.rename(path.join(__dirname, 'word.txt'), path.join(__dirname, 'chat.txt'), (err) => {
            if(err) throw err;
            console.log('rename complete');
        })
    })
})



process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})