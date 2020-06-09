import * as Wire from './Wire';

export function create(input: Wire.Type): Wire.Type {
  const output = Wire.create();

  Wire.subscribe(input, (value) => {
    Wire.send(output, value ? 0 : 1);
  });

  return output;
}
