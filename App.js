import React, { useEffect, useContext, useState, useRef } from 'react'
import { Animated, Dimensions, View, ScrollView, Text } from 'react-native'
import AppContext from './AppContext'
import Workspace from './components/workspace/Workspace'
import Settings from './components/settings/Settings'
import s from './App.style.js'
import { categories, externalDb } from './Db'


const Debug = () => {
  const context = useContext(AppContext)
  return (
    <Text>
      geometry={JSON.stringify(context.geometry)}
      {'\n'}
      tab={JSON.stringify(context.tab)}
      {'\n'}
      db={JSON.stringify(context.db)}
    </Text>
  )
}

const App = () => {
  const [settings, setSettings] = useState(true)
  const [geometry, setGeometry] = useState(() => ({
    tileSize: 50,
    columnsMaxCount: 1,
    tabs: []
  }))
  const [tab, setTab] = useState([0, 0])
  const [db] = useState(() =>
    categories.reduce(
      (accumulator, currentValue) => (
        (accumulator[currentValue.id] = [
          ...new Set(
            currentValue.columns
              .map(element => Object.keys(externalDb[element].data))
              .flat()
          )
        ].sort()),
        accumulator
      ),
      {}
    )
  )

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
        const valueColumnsMaxCount = columnsMaxCount - 1
        let tabs = []
        for (const i in categories) {
          const category = categories[i]
          for (
            let j = 0, badge = 1;
            j < category.columns.length;
            j += valueColumnsMaxCount, badge++
          ) {
            const columns = category.columns.slice(j, j + valueColumnsMaxCount)
            tabs.push({
              ...category,
              key: i + '' + j,
              columns,
              badge:
                category.columns.length > valueColumnsMaxCount ? badge : 0
            })
          }
        }
        return { ...geometry, tileSize, columnsMaxCount, tabs }
      })
    },
    tab,
    setTab,
    db,
    settings,
    setSettings
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
  const scrollX = useRef(new Animated.Value(0)).current
  return (
    <AppContext.Provider value={context}>
      <View style={s.appView}>
        <Workspace />
      </View>
      {context.settings && <Settings />}
    </AppContext.Provider>
  )
}

export default App
