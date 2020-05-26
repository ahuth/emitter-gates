import And from './And';
import Gate from './Gate';
import Not from './Not';
import Wire from './Wire';

export default class Nand extends Gate {
  constructor(input1: Gate | Wire, input2: Gate | Wire) {
    super();
    this.output = new Not(new And(input1, input2));
  }
}
