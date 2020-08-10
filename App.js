import * as React from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import Svg, {  Path,} from 'react-native-svg';

import { Backetball, Car, School, Food, Cog } from './components/Icons'

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

const TiaryIcon = (props) => {
  return (
    <Image source={Icons[props.src].src} style={{width:48, height:48}} />
  );
}

export default function App() {
  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexGrow: 0,backgroundColor: '#ffffff'}}>
        
        
        <TouchableOpacity>
          <Backetball />
        </TouchableOpacity>
        <TouchableOpacity>
          <Car />
        </TouchableOpacity>
        <TouchableOpacity>
          <Food />
        </TouchableOpacity>
        <TouchableOpacity>
          <School />
        </TouchableOpacity>
        <TouchableOpacity>
          <Cog />
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
