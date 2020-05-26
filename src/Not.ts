import Wire from './Wire';

export default class Not {
  output = new Wire();

  constructor(input: Wire) {
    input.subscribe((value) => {
      if (value) {
        this.output.stopCurrent();
      } else {
        this.output.allowCurrent();
      }
    });
  }

  subscribe(callback: (value: 0 | 1) => void) {
    this.output.subscribe(callback);
  }
}
