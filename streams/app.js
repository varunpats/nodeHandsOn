const { writeFileSync } = require('fs');

for (let i = 1; i <= 10000; i++) {
    writeFileSync('./text.txt', `Hello world ${i}`, {flag: 'a'})
}
