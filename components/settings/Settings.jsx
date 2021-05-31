import React, { useContext, useEffect, useRef } from 'react'
import Tile from '../Tile'
import { Animated, View, Text, Dimensions } from 'react-native'
import s from './Settings.style.js'
import AppContext from '../../AppContext'
const Settings = () => {
  const context = useContext(AppContext)
  const padding = useRef(
    new Animated.Value(-Dimensions.get('screen').width)
  ).current
  useEffect(() => {
    console.log(1)
    Animated.timing(padding, {
      toValue: 0,
      duration: 333,
      useNativeDriver: false
    }).start()
  })
  return (
    <Animated.View
      style={{
        ...s.settings,
        marginLeft: padding
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Tile
          {...{
            onPress: () => {
              Animated.timing(padding, {
                toValue: -Dimensions.get('screen').width,
                duration: 333,
                useNativeDriver: false
              }).start(() => {
                context.setSettings(false)
              })
            },
            background: 'white',
            icon: 'ArrowLeft',
            foreground: 'black'
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
            height: 50
          }}>
          <Text
            adjustsFontSizeToFit={true}
            style={{
              textAlign: 'center',
              fontSize: 50
            }}>
            Settings
          </Text>
        </View>
      </View>
    </Animated.View>
  )
}
export default Settings
