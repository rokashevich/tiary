import React, { useEffect, useContext, useState } from 'react'
import { Dimensions, View, Text } from 'react-native'
import AppContext from './AppContext'
import Tabs from './components/Tabs'
import Table from './components/Table'
import s from './App.style.js'

const Debug = () => {
  const context = useContext(AppContext)
  return (
    <Text>
      tab={JSON.stringify(context.tab)}
      {'\n'}tileSize={JSON.stringify(context.tileSize)}
      {'\n'}columnsMaxCount={JSON.stringify(context.columnsMaxCount)}
    </Text>
  )
}

const App = () => {
  const [tileSize, setTileSize] = useState(25)
  const [columnsMaxCount, setColumnsMaxCount] = useState()
  const [tab, setTab] = useState({ category: 0, offset: 0 })

  const context = {
    tileSize,
    columnsMaxCount,
    recalculateGeometry: o => {
      // Типа полиморфизм: пользователь закидывает в функцию новый размер клетки,
      // поворачивая экран в горизонтальный режим в функцию закидывается новая
      // ширина. В обоих случаях происходит пересчёт максимального кол-ва колонок.
      if (typeof o === 'number') setTileSize(o)
      setColumnsMaxCount(Math.floor(Dimensions.get('window').width / tileSize))
    },
    tab,
    setTab
  }
  useEffect(() => {
    context.recalculateGeometry()
    Dimensions.addEventListener('change', context.recalculateGeometry)
    return () => {
      Dimensions.removeEventListener('change', context.recalculateGeometry)
    }
  }, [])

  // const base_size = userSettings.tileSize
  // const screen_width = Dimensions.get('window').width
  // const max_columns = Math.floor(screen_width / base_size)
  // const tile_size = Math.floor(screen_width / max_columns)
  // const pixels_left = screen_width - tile_size * max_columns
  return (
    <AppContext.Provider value={context}>
      <Debug />
      <View style={s.appView}>
        <Tabs />
        <Table />
      </View>
    </AppContext.Provider>
  )
}

export default App
