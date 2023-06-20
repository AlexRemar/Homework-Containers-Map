import ErrorRepository from '../js/app';

test.each([
  [123, 'Eval error'],
  [124, 'Range error'],
  [125, 'Reference error'],
  [126, 'Syntax error'],
  [127, 'Type error'],
])('Get error message', (code, message) => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(code)).toEqual(message);
});

test('Get error message by invalid code', () => {
  const errorRepo = new ErrorRepository();
  expect(() => errorRepo.translate(130)).toThrow('Unknown error');
});
