const os = require('os');

console.log(os.arch());

const mem = os.freemem();
console.log(`${mem / 1024 / 1024 / 1024}`);

const tmem = os.totalmem();
console.log(`${tmem / 1024 / 1024 / 1024}`);