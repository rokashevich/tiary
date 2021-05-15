import React, { useContext, useState, useEffect } from 'react'
import { Text, FlatList, View } from 'react-native'

import AppContext from '../AppContext'
import Tile from './Tile'
import Header from './Header'
import s from './Table.style.js'

import { categories, externalDb } from '../Db'

/* Основная рабочая панель - таблица. **/

const Table = () => {
  const context = useContext(AppContext)
  const category = categories.find(x => x.id === context.tab[0])
  const tab = context.geometry.tabs.find(
    x => x.id === context.tab[0] && x.number === context.tab[1]
  )

  const renderItem = ({ item }) => {
    const valuesTileDataCreator = (value, index) => ({
      key: index,
      onPress: () => console.log(index, value),
      background: 'cyan',
      texts: [{ text: value }]
    })
    const columns = category.columns
    return (
      <View style={{ flexDirection: 'row' }}>
        <Tile
          {...{
            key: 'time',
            onPress: () => console.log('time'),
            background: category.background,
            time: item
          }}
        />
        {columns
          .map(e =>
            item in externalDb[e].data ? externalDb[e].data[item] : ''
          )
          .map((e, i) => (
            <Tile {...{ key: i, value: '[' + e + ']' }} />
          ))}
      </View>
    )
  }

  return (
    <>
      {tab && (
        <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
          <FlatList
            inverted
            style={{ flex: 1 }}
            data={context.db[context.tab[0]]}
            renderItem={renderItem}></FlatList>
          <Header {...{ columns: tab.columns }} />
        </View>
      )}
    </>
  )
}

export default Table
