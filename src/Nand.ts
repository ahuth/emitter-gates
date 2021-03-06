import * as And from './And';
import * as Not from './Not';
import type { Type as Wire } from './Wire';

export function create(input1: Wire, input2: Wire): Wire {
  return Not.create(
    And.create(
      input1,
      input2,
    ),
  );
}
