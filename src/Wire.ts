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

/**
 * Create a new wire that is an extension of another wire. That is, whatever signal passes through
 * the input wire, also passes through the new wire.
 */
export function extend(input: Wire) {
  const output = create();

  subscribe(input, (value) => {
    send(output, value);
  });

  return output;
}
