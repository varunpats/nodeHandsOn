const fs = require('fs');

fs.mkdir('temp', (error) => {
    if (!error)
        console.log("Success");
});

fs.writeFile('temp/bio.txt', 'You come first', (e) => {
    if (!e)
        console.log('Success');
})

fs.appendFile('temp/bio.txt', '. Focus on growth!', (e) => {
    if (!e)
        console.log('Success');
})

fs.readFile('temp/bio.txt', 'utf-8', (err, data) => {
    if (!err)
        console.log(data);
})

fs.rename('temp/bio.txt', 'temp/myBio.txt', (e) => {
    if (!e)
        console.log('Success');
})

fs.unlink('temp/myBio.txt', (e) => {
    if (!e)
        console.log('Deleted');
});

fs.rmdir('temp', (error) => {
    if (!error)
        console.log("Deleted");
});