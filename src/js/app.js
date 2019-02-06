const chooseAttack = function (obj) {
  return (
    obj.special.map((elem) => {
      const {
        id, name, description = 'Описание недоступно', icon,
      } = elem;
      return {
        id, name, description, icon,
      };
    })
  );
};

export default chooseAttack;

const characterInfo = {
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

console.log(chooseAttack(characterInfo));
