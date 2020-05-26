import Wire from './Wire';

export default class And {
  output = new Wire();
  value1 = false;
  value2 = false;

  constructor(input1: Wire, input2: Wire) {
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

  subscribe(callback: (value: 0 | 1) => void) {
    this.output.subscribe(function (value) {
      callback(value);
    });
  }
}
