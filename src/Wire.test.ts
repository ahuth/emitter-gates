import Wire from './Wire';

test('allowing current', (done) => {
  expect.hasAssertions();
  const wire = new Wire();

  wire.subscribe((value) => {
    expect(value).toEqual(1);
    done();
  });

  wire.allowCurrent();
});

test('stopping current', (done) => {
  expect.hasAssertions();
  const wire = new Wire();

  wire.subscribe((value) => {
    expect(value).toEqual(0);
    done();
  });

  wire.stopCurrent();
});
