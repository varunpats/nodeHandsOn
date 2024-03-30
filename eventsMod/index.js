const EventEmitter = require('events');

const event = new EventEmitter();

event.on("demo", () => {
    console.log("Hello World!");
});

event.on("demo", () => {
    console.log("Welcome");
});

event.emit("demo")