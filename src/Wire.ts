import { EventEmitter } from 'events';

type Signal = 0 | 1;
type Wire = EventEmitter;
export type Type = Wire;

export const propagationDelay = 0;

export function create(): Wire {
  return new EventEmitter();
}

export function subscribe(wire: Wire, callback: (value: Signal) => void): void {
  wire.on('signal', callback);
}

export function send(wire: Wire, signal: Signal): void {
  setTimeout(() => {
    wire.emit('signal', signal);
  }, propagationDelay);
}

/**
 * Connect two wires, so that any signal passing through the input also passes through the output.
 */
export function connect(input: Wire, output: Wire) {
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
