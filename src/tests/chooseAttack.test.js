import chooseAttack from '../js/app';

test('Поля без описания заполняются по дефолту', () => {
  const inputArr = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 12,
        name: 'Тройная атака',
        icon: 'http://...',
      },
      {
        id: 18,
        name: 'Защита',
        icon: 'http://...',
      },
    ],
  };

  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 12,
      name: 'Тройная атака',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 18,
      name: 'Защита',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]; // ожидает

  const received = chooseAttack(inputArr); // получает
  expect(received).toEqual(expected); // сравнивает
});
