// 10-fs-sync.js

// Append to the file
const { readFileSync, writeFileSync } = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');  // Provide a path
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a'} );  // If the file is not there node will create one and if the file is already there node by defult will override all the values that are in the file

console.log('Done with the task');
console.log('Starting the next one');