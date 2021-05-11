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
      geometry={JSON.stringify(context.geometry)}
      {'\n'}
    </Text>
  )
}

const App = () => {
  const [geometry, setGeometry] = useState(() => ({ tileSize: 50 }))
  const [tab, setTab] = useState({ category: 0, offset: 0 })

  const context = {
    geometry,
    recalculateGeometry: o => {
      // Типа полиморфизм: пользователь закидывает в функцию новый размер клетки,
      // поворачивая экран в горизонтальный режим в функцию закидывается новая
      // ширина. В обоих случаях происходит пересчёт максимального кол-ва колонок.
      setGeometry(geometry => {
        const tileSize = typeof o === 'number' ? o : geometry.tileSize
        const columnsMaxCount = Math.floor(
          Dimensions.get('window').width / tileSize
        )
        return { ...geometry, tileSize, columnsMaxCount }
      })
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
