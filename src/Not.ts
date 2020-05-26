import Gate from './Gate';
import Wire from './Wire';

export default class Not extends Gate {
  output = new Wire();

  constructor(input: Gate | Wire) {
    super();

    input.subscribe((value) => {
      if (value) {
        this.output.stopCurrent();
      } else {
        this.output.allowCurrent();
      }
    });
  }
}
