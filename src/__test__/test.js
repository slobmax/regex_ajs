import { user1, user2 } from '../app';

test('Метод validateUsername экземпляра user1', () => {
  const received = user1.validateUsername();
  const expected = 'Никнейм соответствует требованиям';
  expect(received).toBe(expected);
});

test('Метод validateUsername экземпляра user2', () => {
  const received = user2.validateUsername();
  const expected = 'Некорректный никнейм';
  expect(received).toBe(expected);
});
