import React, { useContext, useState, useEffect } from 'react'
import { Text, FlatList, View } from 'react-native'

import AppContext from '../AppContext'
import Tile from './Tile'
import s from './Table.style.js'

import { categories, db } from '../Db'

/* Основная рабочая панель - таблица. **/

const Table = () => {
  const [data, setData] = useState([])

  const testtest = [
    { key: '202101012359', data: [0, 101, 1, 1] },
    { key: '202101012300', data: [0, 102, 1, 1] },
    { key: '202101012301', data: [0, 103, 1, 1] },
    { key: '202101012302', data: [0, 104, 1, 1] },
    { key: '202101012303', data: [0, 105, 1, 1] },
    { key: '202101012304', data: [0, 106, 1, 1] },
    { key: '202101012305', data: [0, 107, 1, 1] },
    { key: '202101012306', data: [0, 108, 1, 1] },
    { key: '202101012307', data: [0, 109, 1, 1] },
    { key: '202101012308', data: [0, 110, 1, 1] },
    { key: '202101012309', data: [0, 111, 1, 1] },
    { key: '202101012310', data: [0, 112, 1, 1] },
    { key: '202101012311', data: [0, 113, 1, 1] },
    { key: '202101012312', data: [0, 114, 1, 1] },
    { key: '202101012313', data: [0, 115, 1, 1] },
    { key: '202101012314', data: [0, 116, 1, 1] },
    { key: '202101012315', data: [0, 117, 1, 1] },
    { key: '202101012316', data: [0, 118, 1, 1] },
    { key: '202101012317', data: [0, 119, 1, 1] },
    { key: '202101012318', data: [0, 120, 1, 1] },
    { key: '202101012319', data: [0, 121, 1, 1] },
    { key: '202101012320', data: [0, 122, 1, 1] }
  ]
  useEffect(() => {
    setData(testtest)
  }, [])
  const context = useContext(AppContext)
  const category = categories.find(x => x.id === context.categoryId)
  if (!category) return <></>

  const renderItem = ({ item }) => {
    const valuesTileDataCreator = (value, index) => ({
      key: index,
      onPress: () => console.log(index, value),
      background: 'cyan',
      texts: [{ text: value }]
    })
    return (
      <View style={{ flexDirection: 'row' }}>
        <Tile
          {...{
            key: 'time',
            onPress: () => console.log('time'),
            background: 'blue',
            time: item.key
          }}
        />
        {item.data.map((e, i) => (
          <Tile {...valuesTileDataCreator(e, i)} />
        ))}
      </View>
    )
  }
  return <FlatList data={data} renderItem={renderItem}></FlatList>
}

export default Table
