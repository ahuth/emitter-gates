import * as Wire from './Wire';

export function create(input1: Wire.Type, input2: Wire.Type): Wire.Type {
  const output = Wire.create();
  let value1 = false;
  let value2 = false;

  Wire.subscribe(input1, (value) => {
    value1 = value === 1;
    check();
  })

  Wire.subscribe(input2, (value) => {
    value2 = value === 1;
    check();
  })

  function check() {
    if (value1) {
      Wire.send(output, 1);
      return;
    }

    if (value2) {
      Wire.send(output, 1);
      return;
    }

    Wire.send(output, 0);
  }

  return output;
}
