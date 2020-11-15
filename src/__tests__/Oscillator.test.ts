import * as Oscillator from '../Oscillator';
import * as Wire from '../Wire';

// This test works fine when the code is compiled using Babel. However, when compiled using tsc
// the test never actually ends and Jest force kills it after a bit. Not sure why this is different
// when compiled with different tools.
//
// The oscillator is expected to generate an infinite sequence of signals... Maybe I should add the
// ability to stop it from oscillating at some point.
test.skip('oscillation', async () => {
  const output = Oscillator.create();
  Wire.send(output, 0);

  const signals = await Wire.collectSignals(output, 10);
  expect(signals).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
});
