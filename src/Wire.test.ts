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

test('extending', (done) => {
  expect.hasAssertions();
  const input = Wire.create();
  const output = Wire.extend(input);

  let signalCount = 0;

  Wire.subscribe(output, (value) => {
    // Increment the signal count so we can determine what assertion to make. What we really need
    // is a way to collect all signals that have been received into an array.
    signalCount += 1;

    if (signalCount === 1) {
      expect(value).toEqual(0);
    } else if (signalCount === 2) {
      expect(value).toEqual(1);
    } else if (signalCount === 3) {
      expect(value).toEqual(0);
      done();
    }
  });

  Wire.send(input, 0);
  Wire.send(input, 1);
  Wire.send(input, 0);
});
