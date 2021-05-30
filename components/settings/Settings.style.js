import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
  settings: {
    position: 'absolute',
    height: Dimensions.get('screen').height - Constants.statusBarHeight,
    width: Dimensions.get('screen').width,
    marginTop: Constants.statusBarHeight,
    // flexGrow: 1
    // justifyContent: 'flex-end',
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'red'
  }
})
