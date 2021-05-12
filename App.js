import React, { useEffect, useContext, useState } from 'react'
import { Dimensions, View, Text } from 'react-native'
import AppContext from './AppContext'
import Tabs from './components/Tabs'
import Table from './components/Table'
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
  const [geometry, setGeometry] = useState(() => ({
    tileSize: 100,
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
            let j = 0, number = 1;
            j < category.columns.length;
            j += valueColumnsMaxCount, number++
          ) {
            const columns = category.columns.slice(j, j + valueColumnsMaxCount)
            tabs.push({
              ...category,
              key: i + '' + j,
              columns,
              number:
                category.columns.length > valueColumnsMaxCount ? number : 0
            })
          }
        }
        return { ...geometry, tileSize, columnsMaxCount, tabs }
      })
    },
    tab,
    setTab,
    db
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
        <Table />
        <Tabs />
      </View>
    </AppContext.Provider>
  )
}

export default App
