import React, { useContext, useEffect, useRef, useState } from 'react'
import Tile from '../tile/Tile'
import {
  Animated,
  View,
  ScrollView,
  Text,
  Dimensions,
  PanResponder
} from 'react-native'
import s from './Settings.style.js'
import AppContext from '../../AppContext'
import { categories, externalDb } from '../../Db'
const Settings = () => {
  const context = useContext(AppContext)
  const size = context.geometry.tileSize

  const [localCategories, setLocalCategories] = useState(
    categories.map(e => ({ ...e, columns: e.columns.map(e => e) }))
  )
  const [localDb, setLocalDb] = useState(
    Object.entries(externalDb).reduce((acc, cur) => {
      acc[cur[0]] = cur[1]['header']
      return acc
    }, {})
  )

  const padding = useRef(
    new Animated.Value(-Dimensions.get('screen').width)
  ).current
  useEffect(() => {
    console.log(localDb)
    Animated.timing(padding, {
      toValue: 0,
      duration: 333,
      useNativeDriver: false
    }).start()
  })
  const pan = useRef(new Animated.ValueXY()).current
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        }).start()
      }
    })
  ).current
  return (
    <Animated.View
      style={{
        ...s.settings,
        x: padding
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
            alignItems: 'center',
            width: 300,
            height: size
          }}>
          <Text
            adjustsFontSizeToFit={true}
            style={{
              fontSize: size
            }}>
            Settings
          </Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {localCategories
          .map((category, i) => (
            <View key={i}>
              <Animated.View
                {...{ id: category.id }}
                style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  margin: 1,
                  backgroundColor: category.background,
                  transform: [{ translateX: pan.x }, { translateY: pan.y }]
                }}
                {...panResponder.panHandlers}>
                {/* <Tile text='xxx'></Tile> */}
                <Text style={{ color: category.foreground }}>
                  {category.description}
                </Text>
              </Animated.View>
              {category.columns
                .map((column, i) => (
                  <View
                    key={i}
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      margin: 1,
                      marginRight: 25
                    }}>
                    <Text>{externalDb[column].header}</Text>
                  </View>
                ))
                .concat(
                  <View key='add'>
                    <Text>Добавить таблицу</Text>
                  </View>
                )}
            </View>
          ))
          .concat(
            <View key='add'>
              <Text>Добавить категорию</Text>
            </View>
          )}
      </ScrollView>
    </Animated.View>
  )
}
export default Settings
