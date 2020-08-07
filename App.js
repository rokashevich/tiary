import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';

const Icons={
  "cog":{
	  "src" : require('./assets/cog.png')
	},
	"car":{
	  "src" : require('./assets/car.png'),
	},
	"food":{
	  "src" : require('./assets/food.png'),
	},
	"plus":{
	  "src" : require('./assets/plus.png'),
	},
	"school":{
	  "src" : require('./assets/school.png'),
	},
	"sport":{
	  "src" : require('./assets/sport.png'),
	}
}

const TiaryIcon = (props) => {
  return (
    <Image source={Icons[props.src].src} style={{width:24, height:24}}/>
  );
}

export default function App() {
  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexGrow: 0,backgroundColor: '#ffffff'}}>
        <TiaryIcon src='car'/>
        <TiaryIcon src='food'/>
        <TiaryIcon src='school'/>
        <TiaryIcon src='sport'/>
        <TiaryIcon src='car'/>
        <TiaryIcon src='food'/>
        <TiaryIcon src='school'/>
        <TiaryIcon src='sport'/>
        <TiaryIcon src='plus'/>
        <TiaryIcon src='cog'/>
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
