import { EventEmitter } from 'events';

type Wire = EventEmitter;
export type Type = Wire;

export function create(): Wire {
  return new EventEmitter();
}

export function subscribe(wire: Wire, callback: (value: 0 | 1) => void): void {
  wire.on('signal', callback);
}

export function send(wire: Wire, signal: 0 | 1): void {
  setTimeout(() => {
    wire.emit('signal', signal);
  }, 0);
}
