import debounce from 'lodash.debounce';
import * as Wire from './Wire';
import { propagationDelay } from './Wire';

// Wires have a slight propagation delay in them. Calculate our debounce delay based on that. Note
// that we add 1 first, just in case it is 0.
const debounceDelay = (propagationDelay + 1) * 10;

export function create(input1: Wire.Type, input2: Wire.Type): Wire.Type {
  const output = Wire.create();
  let value1 = false;
  let value2 = false;

  Wire.subscribe(input1, (value) => {
    value1 = value === 1;
    check();
  })

  Wire.subscribe(input2, (value) => {
    value2 = value === 1;
    check();
  })

  // Debouncing the check function ensures that if each input receives a signal in close succession,
  // we'll only emit a single output event.
  const check = debounce(function () {
    if (value1) {
      if (value2) {
        Wire.send(output, 1);
        return;
      }
    }
    Wire.send(output, 0);
  }, debounceDelay);

  return output;
}
