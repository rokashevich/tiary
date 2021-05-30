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
      duration: 1000,
      useNativeDriver: false
    }).start()
  })
  return (
    <Animated.View
      style={{
        ...s.settings,
        marginLeft: padding
      }}>
      <Tile
        {...{
          onPress: () => {
            Animated.timing(padding, {
              toValue: -Dimensions.get('screen').width,
              duration: 1000,
              useNativeDriver: false
            }).start(() => {
              context.setSettings(false)
            })
          },
          background: 'lightgray',
          icon: 'Cog',
          foreground: 'black'
        }}
      />
    </Animated.View>
  )
}
export default Settings
