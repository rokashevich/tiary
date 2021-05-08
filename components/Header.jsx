import React, { useContext, useState, useEffect } from 'react'
import { Text, FlatList, View } from 'react-native'

import AppContext from '../AppContext'
import Tile from './Tile'
import s from './Table.style.js'

import { categories, db } from '../Db'

/* Основная рабочая панель - таблица. **/

const Header = () => {
  const context = useContext(AppContext)
  const category = categories.find(x => x.id === context.categoryId)
  if (!category) return <></>
  const columns = [11, 22, 33, 44, 55, 66]

  const tileDataCreator = (value, index) => ({
    key: index,
    onPress: () => console.log(index, value),
    background: category.background,
    texts: [{ text: value }]
  })

  return (
    <View style={{ flexDirection: 'row' }}>
      {columns.map((e, i) => (
        <Tile {...tileDataCreator(e, i)} />
      ))}
    </View>
  )
}

export default Header
