import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
  appView: {
    marginTop: Constants.statusBarHeight,
    // height: '100%',
    flexGrow: 1,
    justifyContent: 'flex-end'
  }
})
