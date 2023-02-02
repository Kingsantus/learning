const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'name.txt'), 'utf8'); //reading file
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'name.txt')); // deleting file
        await fsPromises.writeFile(path.join(__dirname, 'write.txt'), data); //writing file
        await fsPromises.appendFile(path.join(__dirname, 'write.txt'), '\n\n this is fun'); //appending text to file
        await fsPromises.rename(path.join(__dirname, 'write.txt'), path.join(__dirname, 'finito.txt')); //renaming file
        const newData = await fsPromises.readFile(path.join(__dirname, 'finito.txt'), 'utf8'); //reading file
        console.log(newData);
    } catch (err) {
        console.error(err)
    }
}

fileOps()
