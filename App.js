import * as React from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import Svg, {  Path,} from 'react-native-svg';

import { Icons, Backetball, Car, School, Food, Cog } from './components/Icons'

// Всё дерево категорий хранится в единой структуре, т.к. он никогда не будет слишком большим в принципе.
var nodes = [
  {
    "title":"Спорт",
    "description":"Упражнения на силу, выносливость и растяжка",
    "icon":"dumbbells",
    "entries":[
      {"title":"Подтягивания"},
      {"title":"Отжимания"},
      {"title":"Бёрпи"},
      {"title":"Лодочка"},
      {"title":"Пресс"},
      {"title":"Растяжка"}
    ]
  },
  {
    "title":"Овощи",
    "icon":"vegetables",
    "entries":[
      {"title":"Кабачок"},
      {"title":"Свёкла"},
      {"title":"Морковь"},
      {"title":"Тыква"},
    ]
  },
  {
    "title":"Завтраки",
    "icon":"porridge",
    "entries":[
      {"title":"Рис с яйцом"},
      {"title":"Греча"},
      {"title":"Овсянка, сэр!"},
      {"title":"Полба"},
    ]
  },
  {
    "title":"Здоровье",
    "icon":"porridge",
    "entries":[
      {"title":"Давление"},
      {"title":"Пульс"}
    ]
  },
  {
    "title":"Авто",
    "icon":"porridge",
    "entries":[
      {"title":"Топливо"},
      {"title":"Прочее"}
    ]
  }
]

const ButtonsRow = (props) => {
  
  var tmp_buttons = [
    {"name":"Backetball", "color":"orange"}, 
    {"name":"Car", "color":"green"}, 
    {"name":"Food", "color":"gray"}, 
    {"name":"School", "color":"blue"}, 
    {"name":"Hospital", "color":"red"},
    {"name":"Cog", "color":"black"}
  ]
  return  (
      tmp_buttons.map(button => (  
        <TouchableOpacity 
          onPress={()=>{}}
        >
          <Icons name={button.name} color={button.color}/>
        </TouchableOpacity>
      ))
  )
}

export default function App() {

  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexGrow: 0,backgroundColor: '#ffffff'}}>
        <ButtonsRow/>
      </ScrollView>

      <ScrollView style={{flex: 1, backgroundColor: '#fafafa'}}>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>

      </ScrollView>
    </View>
  );
}
