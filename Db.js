  export const Categories = [
    { id: 11, name: 'Backetball', color: 'orange', tables: [101,102,103,104,105] },
    { id: 12, name: 'Car', color: 'crimson', tables: [201,202,203,204,205,206,207,208,209,210] },
    { id: 13, name: 'Food', color: 'navy', tables: [301,302,303,304,305] },
    { id: 14, name: 'School', color: 'blue', tables: [401,402,403,404,405] },
    { id: 15, name: 'Hospital', color: 'red', tables: [501,502,503,504,505] },
    { id: 0, name: 'Cog', color: 'black', tables: [601,602,603,604,605] },
  ]

  export const Tables = {
    101:{name:"Отжимания",
      description:[{name:"",type:"int"}],
      records:[
        {timestamp:202009141259,values:[100]},
        {timestamp:202009151301,values:[110]}]
      },
    201:{name:"Заправка",
      description:[{name:"реблей",type:"int"},{name:"литров",type:"int"},{name:"руб/литр",type:"%2/%1"}],
      records:[
        {timestamp:202009151301,value:[1500,25]},
        {timestamp:202009151327,value:[2000,35]}]
      },
    301:{name:"Свёкла",
      description:[{name:"",type:"bool"}],
      records:[
        {timestamp:202009141259,values:[1]},
        {timestamp:202009151301,values:[1]},
        {timestamp:202009201301,values:[1]}]
      },
    501:{name:"Давление и пульс",
      description:[{name:"сист",type:"int"},{name:"дист",type:"int"},{name:"пульс",type:"int"}],
      records:[
        {timestamp:202009151256,values:[120,80,60]},
        {timestamp:202009151301,values:[110,70,91]},
        {timestamp:202009151301,values:[NaN,NaN,121]},
        {timestamp:202009151301,values:[115,71,71]}]
      },
    502:{name:"Посещение стоматолога",
      description:[{name:"",type:"bool"}],
      records:[
        {timestamp:202001151300,value:1},
        {timestamp:202009151302,value:1}]
      }
  }

  export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]
