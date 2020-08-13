import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Icons, Backetball, Car, School, Food, Cog } from './components/Icons';

// Всё дерево категорий хранится в единой структуре, т.к. он никогда не будет слишком большим в принципе.
var nodes = [
  {
    title: 'Спорт',
    description: 'Упражнения на силу, выносливость и растяжка',
    icon: 'dumbbells',
    entries: [
      { title: 'Подтягивания' },
      { title: 'Отжимания' },
      { title: 'Бёрпи' },
      { title: 'Лодочка' },
      { title: 'Пресс' },
      { title: 'Растяжка' },
    ],
  },
  {
    title: 'Овощи',
    icon: 'vegetables',
    entries: [
      { title: 'Кабачок' },
      { title: 'Свёкла' },
      { title: 'Морковь' },
      { title: 'Тыква' },
    ],
  },
  {
    title: 'Завтраки',
    icon: 'porridge',
    entries: [
      { title: 'Рис с яйцом' },
      { title: 'Греча' },
      { title: 'Овсянка, сэр!' },
      { title: 'Полба' },
    ],
  },
  {
    title: 'Здоровье',
    icon: 'porridge',
    entries: [{ title: 'Давление' }, { title: 'Пульс' }],
  },
  {
    title: 'Авто',
    icon: 'porridge',
    entries: [{ title: 'Топливо' }, { title: 'Прочее' }],
  },
];

//const ButtonsRow = (props) => {
class ButtonsRow extends Component {
  render() {
    var tmp_buttons = [
    { id: 1, name: 'Backetball', color: 'orange' },
    { id: 2, name: 'Car', color: 'green' },
    { id: 3,  name: 'Food', color: 'gray' },
    { id: 4,  name: 'School', color: 'blue' },
    { id: 5,  name: 'Hospital', color: 'red' },
    { id: 6,  name: 'Cog', color: 'black' },
  ];
  return tmp_buttons.map((button) => (
    <TouchableOpacity onPress={() => this.props.handler(button.id)}>
      <Icons name={button.name} color={button.color} />
    </TouchableOpacity>
  ));
  }
  
}

class App extends Component {

  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }  

  handler(id) {
    console.log(id)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0, backgroundColor: '#ffffff' }}>
          <ButtonsRow handler = {this.handler} />
        </ScrollView>

        <ScrollView style={{ flex: 1, backgroundColor: '#fafafa' }}>
          <Text>
            width={Dimensions.get('window').width} ratio={PixelRatio.get()}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default App;
