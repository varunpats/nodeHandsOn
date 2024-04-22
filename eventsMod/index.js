const EventEmitter = require('events');

const event = new EventEmitter();

event.on("demo", (name) => {
    console.log(`Hello ${name}`);
});

event.on("demo", () => {
    console.log("Welcome");
});

event.emit("demo", "Varun")