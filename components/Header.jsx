import React, { useContext, useState, useEffect } from 'react'
import { Text, FlatList, View } from 'react-native'

import AppContext from '../AppContext'
import Tile from './Tile'
import s from './Table.style.js'

import { db } from '../Db'

/* Основная рабочая панель - таблица. **/

const Header = props => {
  const columns = props.columns
  return (
    <View style={{ flexDirection: 'row' }}>
      <Tile key='empty' />
      {columns.map((e, i) => (
        <Tile
          {...{
            key: i,
            onPress: () => console.log(e, i),
            background: 'red',
            header: db.find(x => x.id == e).header
          }}
        />
      ))}
    </View>
  )
}

export default Header
