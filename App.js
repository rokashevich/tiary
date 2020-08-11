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

// const TiaryIcon = (props) => {
//   return (
//     <Image source={Icons[props.src].src} style={{width:48, height:48}} />
//   );
// }

const ButtonsRow = () => {
  var tmp_buttons = [
    {"name":"Backetball", "color":"red"}, 
    {"name":"Car", "color":"green"}, 
    {"name":"Food", "color":"blue"}, 
    {"name":"School", "color":"yellow"}, 
    {"name":"Cog", "color":"gray"}
  ]
  return  (
      tmp_buttons.map(button => (  
        <TouchableOpacity>
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
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>
        <Text>width={Dimensions.get('window').width} ratio={PixelRatio.get()}</Text>

      </ScrollView>
    </View>
  );
}
