import * as Wire from './Wire';

test('allowing current', (done) => {
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

test('connecting', (done) => {
  expect.hasAssertions();
  const input = Wire.create();
  const output = Wire.create();
  Wire.connect(input, output);

  Wire.collectSignals(output, 3).then(function (signals) {
    expect(signals).toEqual([0, 1, 0]);
    done();
  });

  Wire.send(input, 0);
  Wire.send(input, 1);
  Wire.send(input, 0);
});
