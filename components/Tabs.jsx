import React, { useContext } from 'react'
import { ScrollView } from 'react-native'

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
      key: category.id,
      onPress: () => {
        context.setCategoryId(category.id)
      },
      background: category.background,
      icon: category.icon,
      iconColors: category.iconColors
    }
  }
  const cogsTileData = {
    key: 'cogs',
    onPress: () => {
      console.log('cogs')
    },
    background: 'lightgray',
    icon: 'Cog',
    iconColors: ['darkgray']
  }

  return (
    <ScrollView horizontal style={s.scrollView}>
      {categories
        .map(category => <Tile {...groupTileDataCreator(category)} />)
        .concat(<Tile {...cogsTileData} />)}
    </ScrollView>
  )
}

export default Tabs
