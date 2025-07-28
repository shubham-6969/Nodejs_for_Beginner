// Import EventEmitter class always compulsory
const EventEmitter = require("events");

// Create an instance of EventEmitter

const emitter = new EventEmitter();

// 1. Define an event listener (addListener)

emitter.on("greet", () => {
  console.log('Follow me on Linkedin https://www.linkedin.com/in/shubhampatwal017')
});


// 2. Trigger (emit) the "greet" event 


// emitter.emit('greet'); 

// output  Follow me on Linkedin https://www.linkedin.com/in/shubhampatwal017

//* You can also pass arguments while emitting.

emitter.on("greet", (username, prof) => {
  console.log(`Hello ${username}, You are a ${prof}, right`);
})
emitter.emit("greet", "Rahul", "Full Stack Dev");

//! but it's best idea to take a single argument as an object

emitter.on("greet", (arg) => {
  console.log(`Hello ${arg.name}, You are a ${arg.prof}, right`);
})
emitter.emit("greet",{ name: "Rahul Thapa", prof: "full Stack Dev"})