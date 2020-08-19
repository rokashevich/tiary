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

const Tile = (props) => {
  return (
    <View style={{
      width:props.geometry.size,
      height:props.geometry.size,
      backgroundColor: 'gold',
      borderWidth: 2,
      borderColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      }} >
      <Text adjustsFontSizeToFit={true} minimumFontScale={0.01}
        style={{color:'black', fontSize:props.geometry.size/4}}>
        {props.text}
      </Text>
    </View>
  )
  /**
   <Text style={{'background':'red',textAlign: 'center', alignSelf: 'stretch', width: props.geometry.size, height: props.geometry.size, padding: 0}}>{props.text} {props.geometry.size}</Text>
   */
}

const App = () => {
  const [node, setNode] = useState({ node: 10 });
  
  // Размер тайла, кол-во колонок зависят от размера экранчика и плотности пикселей.
  const base_size = 48;
  const max_columns = Math.floor(Dimensions.get('window').width / base_size)
  const tile_size = base_size + Math.floor(( Dimensions.get('window').width - max_columns*base_size ) / max_columns)
  const [geometry, setGeometry] = useState({ size: tile_size });
  
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
        <Text>tile size = {tile_size}</Text>
        <Text>{node.node}</Text>
        <Text>
          width={Dimensions.get('window').width} ratio={PixelRatio.get()}
        </Text>
        <Tile geometry={geometry} text="WWWW"/>
        <Tile geometry={geometry} text="short"/>
      </ScrollView>
    </View>
  )
}

export default App;
