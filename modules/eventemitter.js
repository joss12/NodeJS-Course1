const EventEmitter = require('events');



const customEmitter = new EventEmitter();



customEmitter.on('response', ()=>{
    console.log('data recieve');
})
customEmitter.on('response', ()=>{
    console.log('some other logic');
})

customEmitter.emit('response')