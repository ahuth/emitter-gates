import And from './And';
import Gate from './Gate';
import Nand from './Nand';
import Or from './Or';
import type Wire from './Wire';

export default class Xor extends Gate {
  constructor(input1: Wire | Gate, input2: Wire | Gate) {
    super();

    this.output = new And(
      new Or(input1, input2),
      new Nand(input1, input2),
    );
  }
}
