import * as Not from './Not';
import * as Wire from './Wire';

test('inverting 1', (done) => {
  expect.hasAssertions();
  const input = Wire.create();
  const output = Not.create(input);

  Wire.subscribe(output, (value) => {
    expect(value).toEqual(0);
    done();
  });

  Wire.send(input, 1);
});

test('inverting 0', (done) => {
  expect.hasAssertions();
  const input = Wire.create();
  const output = Not.create(input);

  Wire.subscribe(output, (value) => {
    expect(value).toEqual(1);
    done();
  });

  Wire.send(input, 0);
});
