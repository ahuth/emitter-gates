import * as And from '../And';
import * as Wire from '../Wire';

test('0, 0', async () => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = And.create(input1, input2);

  Wire.send(input1, 0);
  Wire.send(input2, 0);

  const signals = await Wire.collectSignals(output, 1);
  expect(signals).toEqual([0]);
});

test('0, 1', async () => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = And.create(input1, input2);

  Wire.send(input1, 0);
  Wire.send(input2, 1);

  const signals = await Wire.collectSignals(output, 1);
  expect(signals).toEqual([0]);
});

test('1, 0', async () => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = And.create(input1, input2);

  Wire.send(input1, 1);
  Wire.send(input2, 0);

  const signals = await Wire.collectSignals(output, 1);
  expect(signals).toEqual([0]);
});

test('1, 1', async () => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = And.create(input1, input2);

  Wire.send(input1, 1);
  Wire.send(input2, 1);

  const signals = await Wire.collectSignals(output, 1);
  expect(signals).toEqual([1]);
});
