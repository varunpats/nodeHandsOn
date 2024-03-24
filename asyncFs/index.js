const fs = require('fs');

fs.writeFile('demo.txt', 'Focus', (e) => {
    if(!e)
    console.log("Success");
});

fs.appendFile('demo.txt', ' on your goals!', (e) => {
    if(!e)
        console.log("Success");
})

fs.readFile('demo.txt', 'utf-8', (e, data) => {
    if (!e)
        console.log(data);
})