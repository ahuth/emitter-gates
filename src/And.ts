import Gate from './Gate';
import Wire from './Wire';

export default class And extends Gate {
  output = new Wire();
  value1 = false;
  value2 = false;

  constructor(input1: Gate | Wire, input2: Gate | Wire) {
    super();

    input1.subscribe((value) => {
      this.value1 = value === 1;
      this.check();
    });

    input2.subscribe((value) => {
      this.value2 = value === 1;
      this.check();
    });
  }

  check() {
    if (this.value1) {
      if (this.value2) {
        this.output.allowCurrent();
        return;
      }
    }
    this.output.stopCurrent();
  }
}
