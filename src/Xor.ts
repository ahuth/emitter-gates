import * as And from './And';
import * as Nand from './Nand';
import * as Or from './Or';
import type { Type as Wire } from './Wire';

export function create(input1: Wire, input2: Wire): Wire {
  return And.create(
    Or.create(input1, input2),
    Nand.create(input1, input2),
  );
}
