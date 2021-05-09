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

export const db = [
  {
    id: 1,
    header: { text: 'Посещение стоматолога' },
    data: [
      { time: 202001151300, value: true },
      { time: 202009151302, value: true }
    ]
  },
  {
    id: 2,
    header: { text: 'Бёрпи' },
    data: [
      { time: 202009141259, value: 100 },
      { time: 202009151301, value: 110 },
      { time: 202105061130, value: 100 },
      { time: 202105061330, value: 50 },
      { time: 202105061800, value: 100 },
      { time: 202105061930, value: 50 },
      { time: 202105062030, value: 50 },
      { time: 202105070900, value: 50 },
      { time: 202105071100, value: 50 },
      { time: 202105071315, value: 50 },
      { time: 202105071400, value: 50 },
      { time: 202105072000, value: 222 },
      { time: 202105080900, value: 50 },
      { time: 202105081100, value: 50 },
      { time: 202105081800, value: 80 },
      { time: 202105090900, value: 50 },
      { time: 202105091538, value: 20 }
    ]
  },
  {
    id: 3,
    header: { text: 'сист' },
    data: [
      { time: 202009141259, value: 120 },
      { time: 202009151301, value: 110 },
      { time: 202105061330, value: 115 }
    ]
  },
  {
    id: 4,
    header: { text: 'дист' },
    data: [
      { time: 202009141259, value: 80 },
      { time: 202009151301, value: 70 },
      { time: 202105061330, value: 71 }
    ]
  },
  {
    id: 5,
    header: { text: 'пульс' },
    data: [
      { time: 202009141259, value: 60 },
      { time: 202009151301, value: 91 },
      { time: 202105061130, value: 121 },
      { time: 202105061330, value: 71 }
    ]
  },
  {
    id: 6,
    header: { text: 'рублей' },
    data: [
      { time: 202009141259, value: 1000 },
      { time: 202009151301, value: 1500 },
      { time: 202105061330, value: 2000 }
    ]
  },
  {
    id: 7,
    header: { text: 'литров' },
    data: [
      { time: 202009141259, value: 25 },
      { time: 202009151301, value: 35 },
      { time: 202105061130, value: 40 }
    ]
  }
]
