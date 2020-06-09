import * as And from './And';
import * as Wire from './Wire';

test('0, 0', (done) => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = And.create(input1, input2);

  Wire.subscribe(output, function (value) {
    expect(value).toEqual(0);
    done();
  });

  Wire.send(input1, 0)
  Wire.send(input2, 0)
});

test('0, 1', (done) => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = And.create(input1, input2);

  Wire.subscribe(output, function (value) {
    expect(value).toEqual(0);
    done();
  });

  Wire.send(input1, 0)
  Wire.send(input2, 1)
});

test('1, 0', (done) => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = And.create(input1, input2);

  Wire.subscribe(output, function (value) {
    expect(value).toEqual(0);
    done();
  });

  Wire.send(input1, 1)
  Wire.send(input2, 0)
});

test('1, 1', (done) => {
  expect.hasAssertions();
  const input1 = Wire.create();
  const input2 = Wire.create();
  const output = And.create(input1, input2);

  Wire.subscribe(output, function (value) {
    if (value) {
      expect(value).toEqual(1);
      done();
    }
  });

  Wire.send(input1, 1)
  Wire.send(input2, 1)
});
