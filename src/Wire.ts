import { EventEmitter } from 'events';

export default class Wire {
  emitter = new EventEmitter();

  subscribe(callback: (value: 0 | 1) => void) {
    this.emitter.on('signal', callback);
  }

  allowCurrent() {
    setTimeout(() => {
      this.emitter.emit('signal', 1);
    }, 0);
  }

  stopCurrent() {
    setTimeout(() => {
      this.emitter.emit('signal', 0);
    }, 0);
  }
}
