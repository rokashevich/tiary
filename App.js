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

var tmp_buttons = ["Backetball", "Car", "Food", "School", "Cog"]

export default function App() {
  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexGrow: 0,backgroundColor: '#ffffff'}}>
        
        
        <TouchableOpacity>
          <Icons name={tmp_buttons[0]} color="blue"/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons name={tmp_buttons[1]} color="orange"/>
        </TouchableOpacity>
        


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
