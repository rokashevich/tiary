import React, { Component, useState } from 'react';
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
  11: 'Basketball',
  12: 'Car',
  13: 'Food',
  14: 'School',
  15: 'Hospital',
};

const ButtonsRow = (props) => {
  var tmp_buttons = [
    { id: 11, name: 'Backetball', color: 'orange' },
    { id: 12, name: 'Car', color: 'green' },
    { id: 13, name: 'Food', color: 'gray' },
    { id: 14, name: 'School', color: 'blue' },
    { id: 15, name: 'Hospital', color: 'red' },
    { id: 0, name: 'Cog', color: 'black' },
  ];
  return tmp_buttons.map((button) => (
    <TouchableOpacity 
      onPress={() => {
        console.log(button.id)
        props.handler({ node: button.id })
      }}>
      <Icons name={button.name} color={button.color} />
      <Text style={{position: 'absolute',bottom:0,right:0,background:button.color,color:'white'}}>{button.id}</Text>
    </TouchableOpacity>
  ))
}

const App = () => {
  const [node, setNode] = useState({ node: 10 });
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0, backgroundColor: '#ffffff' }}>
        <ButtonsRow handler={setNode}/>
      </ScrollView>

      <ScrollView
        style={{ flex: 1, backgroundColor: '#fafafa' }}
        stickyHeaderIndices={[0]}>
        <Text>{node.node}</Text>
        <Text>
          width={Dimensions.get('window').width} ratio={PixelRatio.get()}
        </Text>
      </ScrollView>
    </View>
  )
}

export default App;
