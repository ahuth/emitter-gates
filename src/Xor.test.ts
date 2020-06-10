import * as Xor from './Xor';
import * as Wire from './Wire';

test('0, 0', async () => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = Xor.create(input1, input2);

  Wire.send(input1, 0);
  Wire.send(input2, 0);

  // We would expect there to be 2 output events, since there are only 2 input events. However, the
  // inputs each go to two separate gates that the Xor uses, causing each one to trigger two output
  // events. This is unfortunate, and confusing, but I'm not sure how to get around it.
  const signals = await Wire.collectSignals(output, 4);
  expect(signals).toEqual([0, 0, 0, 0]);
});

test('0, 1', async () => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = Xor.create(input1, input2);

  Wire.send(input1, 0);
  Wire.send(input2, 1);

  // We would expect there to be 2 output events, since there are only 2 input events. However, the
  // inputs each go to two separate gates that the Xor uses, causing each one to trigger two output
  // events. This is unfortunate, and confusing, but I'm not sure how to get around it.
  const signals = await Wire.collectSignals(output, 4);
  expect(signals).toEqual([0, 0, 1, 1]);
});

test('1, 0', async () => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = Xor.create(input1, input2);

  Wire.send(input1, 1);
  Wire.send(input2, 0);

  // We would expect there to be 2 output events, since there are only 2 input events. However, the
  // inputs each go to two separate gates that the Xor uses, causing each one to trigger two output
  // events. This is unfortunate, and confusing, but I'm not sure how to get around it.
  const signals = await Wire.collectSignals(output, 4);
  expect(signals).toEqual([0, 0, 1, 1]);
});

test('1, 1', async () => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = Xor.create(input1, input2);

  Wire.send(input1, 1);
  Wire.send(input2, 1);

  // We would expect there to be 2 output events, since there are only 2 input events. However, the
  // inputs each go to two separate gates that the Xor uses, causing each one to trigger two output
  // events. This is unfortunate, and confusing, but I'm not sure how to get around it.
  const signals = await Wire.collectSignals(output, 4);
  expect(signals).toEqual([0, 0, 1, 0]);
});
