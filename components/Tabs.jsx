import React, { useContext } from 'react'
import { View, ScrollView } from 'react-native'

import AppContext from '../AppContext'
import { categories } from '../Db'
import Tile from './Tile'
import s from './Tabs.style.js'

/* Возвращаем массив кнопок верхней панели.
Каждый родственный компонент должен содержать уникальный key т.е.
<Tile key=...> - требование JSX: 
https://reactjs.org/docs/lists-and-keys.html **/

const Tabs = () => {
  const context = useContext(AppContext)
  const groupTileDataCreator = category => {
    return {
      ...category,
      onPress: () => {
        context.setTab([category.id, category.number])
      }
    }
  }
  const cogsTileData = () => ({
    key: 'cogs',
    onPress: () => {
      context.setSettings(true)
      //context.recalculateGeometry(context.geometry.tileSize + 1)
    },
    background: 'lightgray',
    icon: 'Cog',
    foreground: 'black'
  })
  return (
    <View>
      <ScrollView horizontal style={s.scrollView}>
        {context.geometry.tabs
          .map(category => <Tile {...groupTileDataCreator(category)} />)
          .concat(<Tile {...cogsTileData()} />)}
      </ScrollView>
    </View>
  )
}

export default Tabs
