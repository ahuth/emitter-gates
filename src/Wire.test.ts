import * as Wire from './Wire';

test('starting current', (done) => {
  expect.hasAssertions();
  const wire = Wire.create();

  Wire.subscribe(wire, (value) => {
    expect(value).toEqual(1);
    done();
  });

  Wire.send(wire, 1);
});

test('stopping current', (done) => {
  expect.hasAssertions();
  const wire = Wire.create();

  Wire.subscribe(wire, (value) => {
    expect(value).toEqual(0);
    done();
  });

  Wire.send(wire, 0);
});

test('connecting wries', async () => {
  expect.hasAssertions();
  const input = Wire.create();
  const output = Wire.create();

  Wire.connect(input, output);
  Wire.send(input, 0);
  Wire.send(input, 1);
  Wire.send(input, 0);

  const signals = await Wire.collectSignals(output, 3);
  expect(signals).toEqual([0, 1, 0]);
});

test('collecting signals', async () => {
  expect.hasAssertions();
  const wire = Wire.create();

  Wire.send(wire, 0);
  Wire.send(wire, 0);
  Wire.send(wire, 1);
  Wire.send(wire, 1);
  Wire.send(wire, 0);
  Wire.send(wire, 1);

  const signals = await Wire.collectSignals(wire, 6);
  expect(signals).toEqual([0, 0, 1, 1, 0, 1]);
});
