const { message, sayMessage } = require('./module1');
const add = require('./module2');

sayMessage();

console.log(add(message, ' There!'));
