// Note: first try your self 

//? Challege" Event Maestro: Handle It All!

// Objective
// Create a program using Node.js EventEmitter that:

// Listen for mulitple types of user events (eg. login, sigup, logout, purchase and profile update)
// Tracks how many times each event is emitted.
// Logs a summary of all event occurrences whe a special summary event is triggered.

// Reuirements
// Create ar least four custom evetns (eg. user-login , user-logout, user-purchase , profile-update)
// Emit these evetns mulitple times with different arguments (eg, username, item purchased).
// define a summary event that log a detailed report of how many times each event was triggend.

// import eventEmitter
const EventEmitter = require('events');
const { emit } = require('process');
const emiter = new EventEmitter();

// counter variable counts event


const eventCount = {
  'user-login': 0,
  'user-logout':0,
  'user-signup': 0,
  'user-purchase':0,
  'profile-update':0
}

emiter.on('user-signup', (username) => {
  eventCount['user-signup']++;
  console.log(`${username} signup successfully`)
})

emiter.on('user-login', (username) => {
  eventCount['user-login']++;
  console.log(`${username} login successfully`)
})

emiter.on('user-purchase', (username) => {
  eventCount['user-purchase']++;
  console.log(`${username} purchased successfully`)
})
emiter.on('profile-update', (username) => {
  eventCount['profile-update']++;
  console.log(`${username} profile update successfully`)
})
emiter.on('user-logout', (username) => {
  eventCount['user-logout']++;
  console.log(`${username} logout successfully`)
})

emiter.on('summary', ()=> {
  console.log("Event Summary");
  console.log(eventCount);
})

// emit events

emiter.emit('user-signup', 'Shubham');
emiter.emit('user-login', 'Shubham');
emiter.emit('user-purchase', 'Shubham');
emiter.emit('profile-update', 'Shubham');
emiter.emit('user-logout', 'Shubham');


emiter.emit("summary")