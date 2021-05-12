import React, { useContext, useState, useEffect } from 'react'
import { Text, FlatList, View } from 'react-native'

import AppContext from '../AppContext'
import Tile from './Tile'
import s from './Table.style.js'

import { categories, externalDb } from '../Db'

/* Основная рабочая панель - таблица. **/

const Header = props => {
  const columns = props.columns
  const context = useContext(AppContext)
  const category = categories.find(x => x.id === context.tab[0])
  return (
    <View style={{ flexDirection: 'row' }}>
      <Tile key='empty' />
      {columns.map((e, i) => (
        <Tile
          {...{
            key: i,
            onPress: () => console.log(e, i),
            background: category.background,
            header: externalDb[e].header
          }}
        />
      ))}
    </View>
  )
}

export default Header
