import Nand from './Nand';
import Wire from './Wire';

test('0, 0', (done) => {
  expect.hasAssertions();
  const input1 = new Wire();
  const input2 = new Wire();
  const output = new Nand(input1, input2);

  output.subscribe(function (value) {
    if (value) {
      expect(value).toEqual(1);
      done();
    }
  });

  input1.stopCurrent();
  input2.stopCurrent();
});

test('0, 1', (done) => {
  expect.hasAssertions();
  const input1 = new Wire();
  const input2 = new Wire();
  const output = new Nand(input1, input2);

  output.subscribe(function (value) {
    if (value) {
      expect(value).toEqual(1);
      done();
    }
  });

  input1.stopCurrent();
  input2.allowCurrent();
});

test('1, 0', (done) => {
  expect.hasAssertions();
  const input1 = new Wire();
  const input2 = new Wire();
  const output = new Nand(input1, input2);

  output.subscribe(function (value) {
    if (value) {
      expect(value).toEqual(1);
      done();
    }
  });

  input1.allowCurrent();
  input2.stopCurrent();
});

test('1, 1', (done) => {
  expect.hasAssertions();
  const input1 = new Wire();
  const input2 = new Wire();
  const output = new Nand(input1, input2);

  output.subscribe(function (value) {
    if (!value) {
      expect(value).toEqual(0);
      done();
    }
  });

  input1.allowCurrent();
  input2.allowCurrent();
});
