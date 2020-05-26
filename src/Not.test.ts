import Not from './Not';
import Wire from './Wire';

test('inverting 1', (done) => {
  expect.hasAssertions();
  const input = new Wire();
  const output = new Not(input);

  output.subscribe((value) => {
    expect(value).toEqual(0);
    done();
  });

  input.allowCurrent();
});

test('inverting 0', (done) => {
  expect.hasAssertions();
  const input = new Wire();
  const output = new Not(input);

  output.subscribe((value) => {
    expect(value).toEqual(1);
    done();
  });

  input.stopCurrent();
});
