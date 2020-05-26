import Wire from './Wire';

export default abstract class Gate {
  output: Gate | Wire = new Wire();

  subscribe(callback: (value: 0 | 1) => void) {
    this.output.subscribe(function (value) {
      callback(value);
    });
  }
}
