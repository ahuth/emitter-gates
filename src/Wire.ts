import { EventEmitter } from 'events';

export default class Wire {
  emitter = new EventEmitter();

  subscribe(callback: (value: 0 | 1) => void) {
    this.emitter.on('signal', callback);
  }

  allowCurrent() {
    this.emitter.emit('signal', 1);
  }

  stopCurrent() {
    this.emitter.emit('signal', 0);
  }
}
