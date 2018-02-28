const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.on('event', () => {
  console.log('Nog een zelfde event')
})

myEmitter.on('error', (err) => {
  console.error(err);
})

// Emitting an normal event, without any arguments
myEmitter.emit('event');

myEmitter.emit('sfdsalkfjadskfdsa');

// Emitting an error
myEmitter.emit('error', new Error('Oeps, an error occurred'));