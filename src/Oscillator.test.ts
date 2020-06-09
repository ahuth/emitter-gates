import * as Oscillator from './Oscillator';
import * as Wire from './Wire';

test('oscillation', async () => {
  const output = Oscillator.create();
  Wire.send(output, 0);

  const signals = await Wire.collectSignals(output, 10);
  expect(signals).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
});
