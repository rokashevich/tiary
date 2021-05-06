import React, { useContext } from 'react'
import { Text, FlatList } from 'react-native'

import { categories } from '../Db'
import AppContext from '../AppContext'
import Tile from './Tile'
import s from './Tabs.style.js'

/* Основная рабочая панель - таблица. **/

const Table = () => {
  const context = useContext(AppContext)

  // return <FlatList></FlatList>
  return <Text>{context.categoryId}</Text>
}

export default Table
