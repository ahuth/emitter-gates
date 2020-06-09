import * as Not from './Not';
import * as Wire from './Wire';

export function create(): Wire.Type {
  const output = Wire.create();

  Wire.connect(Not.create(output), output);

  return output;
}
