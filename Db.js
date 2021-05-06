export const categories = [
  {
    id: 1,
    description: '',
    background: 'purple',
    draw: {
      icon: { file: 'Backetball', colors: ['green'] },
      text: { value: 'Sport', color: 'blue' }
    },
    icon: 'Backetball',
    iconColors: ['red'],
    foreground: 'orange',
    columns: [101, 101, 101, 102, 102, 102, 103, 103, 103]
  },
  {
    id: 2,
    description: 'Автомобильные траты',
    background: 'blue',
    draw: {
      icon: { file: 'Backetball', colors: ['green'] },
      text: { value: 'Sport', color: 'blue' }
    },
    icon: 'Car',
    iconColors: ['orage'],
    foreground: 'crimson',
    columns: [103, 103, 103, 102, 102, 102, 101, 101, 101, 104]
  },
  {
    id: 3,
    description: 'Учёт съеденного',
    background: 'green',
    draw: {
      icon: { file: 'Backetball', colors: ['green'] },
      text: { value: 'Sport', color: 'blue' }
    },
    icon: 'Food',
    iconColors: ['yellow'],
    foreground: 'navy',
    columns: [102, 102, 102, 103, 103, 103, 101, 101, 101, 104]
  },
  {
    id: 4,
    description: 'Учёт самообразования: прочитанного/прослушанного',
    background: 'yellow',
    draw: {
      icon: { file: 'Backetball', colors: ['green'] },
      text: { value: 'Sport', color: 'blue' }
    },
    icon: 'School',
    iconColors: ['green'],
    foreground: 'blue',
    columns: [101, 102, 103, 101, 102, 103, 101, 102, 103, 104]
  },
  {
    id: 5,
    description: 'Учёт медицинских показателей',
    background: 'orange',
    draw: {
      icon: { file: 'Backetball', colors: ['green'] },
      text: { value: 'Sport', color: 'blue' }
    },
    icon: 'Hospital',
    iconColors: ['blue'],
    foreground: 'red',
    columns: [101, 101, 101, 101, 101, 101, 101, 101, 101, 104]
  }
]

export const Columns = {
  101: {
    header: { text: 'Бёрпи' },
    data: [
      { time: 202009141259, values: [100] },
      { time: 202009151301, values: [110] },
      { time: 202105061130, values: [100] },
      { time: 202105061330, values: [50] }
    ]
  },
  102: {
    header: 'Заправка',
    description: [
      { name: 'реблей', type: 'int' },
      { name: 'литров', type: 'int' },
      { name: 'руб/литр', type: '%2/%1' }
    ],
    records: [
      { timestamp: 202009151301, value: [1500, 25] },
      { timestamp: 202009151327, value: [2000, 35] }
    ]
  },
  103: {
    name: 'Давление и пульс',
    description: [
      { name: 'сист', type: 'int' },
      { name: 'дист', type: 'int' },
      { name: 'пульс', type: 'int' }
    ],
    records: [
      { timestamp: 202009151256, values: [120, 80, 60] },
      { timestamp: 202009151301, values: [110, 70, 91] },
      { timestamp: 202009151301, values: [NaN, NaN, 121] },
      { timestamp: 202009151301, values: [115, 71, 71] }
    ]
  },
  104: {
    name: 'Посещение стоматолога',
    description: [{ name: '', type: 'bool' }],
    records: [
      { timestamp: 202001151300, value: 1 },
      { timestamp: 202009151302, value: 1 }
    ]
  }
}
