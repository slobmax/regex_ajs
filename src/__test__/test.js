import { userName1, userName2 } from '../app';

test('Метод validateUsername экземпляра userName1', () => {
  const received = userName1.validateUsername();
  const expected = true;
  expect(received).toBe(expected);
});

test('Метод validateUsername экземпляра userName2', () => {
  const received = userName2.validateUsername();
  const expected = false;
  expect(received).toBe(expected);
});
