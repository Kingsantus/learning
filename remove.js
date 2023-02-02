const fs = require('fs');

// directory path
const dir = './new';

// delete directory recursively
try {
  fs.rmSync(dir, { recursive: true });
  console.log(`${dir} is deleted!`);
} catch (err) {
  console.error(`Error while deleting ${dir}.`);
} 
