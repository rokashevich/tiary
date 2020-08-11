import * as React from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import Svg, {  Path,} from 'react-native-svg';

import { Icons, Backetball, Car, School, Food, Cog } from './components/Icons'

var categories_tree = [
  {
    "title":"Basketball",
    "description":"",
    "icon":"basketball",
    "categories":[]
  },
  {

  }
]

const ButtonsRow = () => {
  
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
