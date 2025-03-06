const EventEmitter = require('events');
const e = new EventEmitter();

let login = 0, logout = 0, purchase = 0, update = 0;
eventCnt = {
    "login": 0, 
    "logout": 0, 
    "purchase": 0, 
    "update": 0
}

e.on('user-login', (user) => {
    console.log(`${user} logged in`);
    eventCnt.login++;
})

e.on('user-purchase', (user, item) => {
    console.log(`${user} purchased ${item}`);
    eventCnt.purchase++;
})

e.on('profile-update', (user, item) => {
    console.log(`${user} updated ${item}`);
    eventCnt.update++;
})

e.on('user-logout', (user) => {
    console.log(`${user} logged out`);
    eventCnt.logout++;
})

e.on('summary', () => {
    console.log(`Login event - ${eventCnt.login}`);
    console.log(`Purchase event - ${eventCnt.purchase}`);
    console.log(`Update event - ${eventCnt.update}`);
    console.log(`Logout event - ${eventCnt.logout}`);
})

e.emit("user-login", "Varun");
e.emit("user-purchase", "Varun", "Shirt");
e.emit("user-purchase", "Varun", "Shirt");
e.emit("profile-update", "Varun", "Address");
e.emit("user-purchase", "Varun", "T-Shirt");
e.emit("profile-update", "Varun", "Contact");
e.emit("user-logout", "Varun");
e.emit("summary");