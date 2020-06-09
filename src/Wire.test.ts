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
