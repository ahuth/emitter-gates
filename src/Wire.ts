import { EventEmitter } from 'events';

type Signal = 0 | 1;
type Wire = EventEmitter;
export type Type = Wire;

export function create(): Wire {
  return new EventEmitter();
}

export function subscribe(wire: Wire, callback: (value: Signal) => void): void {
  wire.on('signal', callback);
}

export function send(wire: Wire, signal: Signal): void {
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

/**
 * Collect a certain number of "signals" into an array. This makes testing easier in some circumstances.
 */
export function collectSignals(wire: Wire, signalCount: number): Promise<Array<Signal>> {
  if (signalCount <= 0) {
    return Promise.resolve([]);
  }

  return new Promise(function (resolve) {
    let signals: Array<Signal> = [];

    subscribe(wire, function (value) {
      signals.push(value);

      if (signals.length >= signalCount) {
        resolve(signals);
      }
    });
  });
}
