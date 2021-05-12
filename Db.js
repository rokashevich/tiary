export const categories = [
  {
    id: 1,
    description: '',
    background: 'purple',
    icon: 'Backetball',
    iconColors: ['red'],
    foreground: 'orange',
    columns: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    id: 2,
    description: 'Автомобильные траты',
    background: 'blue',
    icon: 'Car',
    iconColors: ['orange'],
    foreground: 'crimson',
    columns: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    id: 3,
    description: 'Учёт съеденного',
    background: 'green',
    icon: 'Food',
    iconColors: ['yellow'],
    foreground: 'navy',
    columns: [7, 6, 5, 4, 3, 2, 1]
  },
  {
    id: 4,
    description: 'Учёт самообразования: прочитанного/прослушанного',
    background: 'yellow',
    icon: 'School',
    iconColors: ['green'],
    foreground: 'blue',
    columns: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    id: 5,
    description: 'Учёт медицинских показателей',
    background: 'orange',
    icon: 'Hospital',
    iconColors: ['blue'],
    foreground: 'red',
    columns: []
  }
]

export const externalDb = {
  1: {
    header: 'Посещение стоматолога',
    data: {
      202001151300: true,
      202009151302: true
    }
  },
  2: {
    header: 'Бёрпи',
    data: {
      202009141259: 100,
      202009151301: 110,
      202105061130: 100,
      202105061330: 50,
      202105061800: 100,
      202105061930: 50,
      202105062030: 50,
      202105070900: 50,
      202105071100: 50,
      202105071315: 50,
      202105071400: 50,
      202105072000: 222,
      202105080900: 50,
      202105081100: 50,
      202105081800: 80,
      202105090900: 50,
      202105091538: 20,
      202105121000: 100
    }
  },

  3: {
    header: 'сист',
    data: {
      202009141259: 120,
      202009151301: 110,
      202105061330: 115
    }
  },

  4: {
    header: 'дист',
    data: {
      202009141259: 80,
      202009151301: 70,
      202105061330: 71
    }
  },

  5: {
    header: 'пульс',
    data: {
      202009141259: 60,
      202009151301: 91,
      202105061130: 121,
      202105061330: 71
    }
  },

  6: {
    header: 'рублей',
    data: {
      202009141259: 1000,
      202009151301: 1500,
      202105061330: 2000
    }
  },

  7: {
    header: 'литров',
    data: {
      202009141259: 25,
      202009151301: 35,
      202105061130: 40
    }
  }
}
