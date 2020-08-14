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

var db = {
11:"Basketball",
12:"Car",
13:"Food",
14:"School",
15:"Hospital"
}

//const ButtonsRow = (props) => {
class ButtonsRow extends Component {
  render() {
    var tmp_buttons = [
    { id: 11, name: 'Backetball', color: 'orange' },
    { id: 12, name: 'Car', color: 'green' },
    { id: 13,  name: 'Food', color: 'gray' },
    { id: 14,  name: 'School', color: 'blue' },
    { id: 15,  name: 'Hospital', color: 'red' },
    { id: 0,  name: 'Cog', color: 'black' },
  ];
  console.log(this.props.size)
  return tmp_buttons.map((button) => (
    <TouchableOpacity onPress={() => this.props.handler(button.id)}>
      <Icons size={this.props.size} name={button.name} color={button.color}/>
    </TouchableOpacity>
  ));
  }
  
}

class App extends Component {
  state = {
    node: 10,
    // iPad 1024 2
    // Xiaomi A1 360 3
    // iPhone 375 2
    // Android 360 3
    // Xiaomi Redmi 360 3
    base_size: 48,
    max_columns: 0,
    column_width: 0
  }

  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.state.max_columns = Math.floor(
      Dimensions.get('window').width / this.state.base_size)
    this.state.column_width = this.state.base_size + Math.floor(
      ( Dimensions.get('window').width - this.state.max_columns*this.state.base_size
      ) / this.state.max_columns)
  }

  handler(id) {
    console.log(id,this.node)
    this.setState({node:id})
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0, backgroundColor: '#ffffff' }}>
          <ButtonsRow size={this.state.column_width} handler={this.handler} />
        </ScrollView>

        <ScrollView style={{ flex: 1, backgroundColor: '#fafafa' }}>
          <Text>node={this.state.node}</Text>
          <Text>base_size={this.state.base_size}</Text>
          <Text>max_columns={this.state.max_columns}</Text>
          <Text>column_width={this.state.column_width}</Text>
          <Text>
            width={Dimensions.get('window').width} ratio={PixelRatio.get()}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default App;
