const { createReadStream } = require('fs');

const stream = createReadStream('./text.txt', 'utf8');

stream.on('data', (result) => {
    console.log(result);
})