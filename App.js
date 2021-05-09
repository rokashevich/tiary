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
      {'\n'}geometry={JSON.stringify(context.geometry)}
    </Text>
  )
}

const App = () => {
  const [geometry, setGeometry] = useState({})
  const [tab, setTab] = useState({ category: 0, offset: 0 })
  const context = {
    geometry,
    recalculateGeometry: tileSize =>
      setGeometry({
        tileSize,
        columnsMaxCount: Math.floor(Dimensions.get('window').width / tileSize)
      }),
    tab,
    setTab
  }
  const onDimensionsChange = () => {
    recalculateGeometry(geometry.tileSize)
  }
  useEffect(() => {
    context.recalculateGeometry(50)
    Dimensions.addEventListener('change', onDimensionsChange)
    return () => {
      Dimensions.removeEventListener('change', onDimensionsChange)
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
