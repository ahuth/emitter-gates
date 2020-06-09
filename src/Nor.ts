import Or from './Or';
import Gate from './Gate';
import Not from './Not';
import Wire from './Wire';

export default class Nor extends Gate {
  constructor(input1: Gate | Wire, input2: Gate | Wire) {
    super();
    this.output = new Not(new Or(input1, input2));
  }
}
