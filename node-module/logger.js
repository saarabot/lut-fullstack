const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(message) {
    // call event
    this.emit('message', { id: uuid.v4(), message });
  }
}

module.exports = Logger;

/**
 * const logger = new Logger();

logger.on('message', (data) => {
  console.log('Called listener', data);
});

logger.log('Hi again');
 */
