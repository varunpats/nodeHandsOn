const fs = require('fs')

const getText = (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                rej(err)
            } else {
                res(data)
            }
        })
    })
}

getText('./demo.txt')
    .then(data => console.log(data))
    .catch(err => console.log(err))