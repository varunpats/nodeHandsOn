const fs = require('fs');

fs.mkdirSync('temp')
fs.writeFileSync('temp/bio.txt', "Hello world! ");
fs.appendFileSync('temp/bio.txt', "Welcome aboard.");
const data = fs.readFileSync('temp/bio.txt', 'utf-8');
console.log(data);
fs.renameSync('temp/bio.txt', 'temp/myBio.txt')
fs.unlinkSync('temp/myBio.txt');
fs.rmdirSync('temp');
