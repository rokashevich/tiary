import React from 'react'
import Tabs from '../Tabs'
import Table from '../Table'
import { View } from 'react-native'
import s from './Workspace.style.js'
const Workspace = () => {
  return (
    <View style={s.workspace}>
      <Table />
      <Tabs />
    </View>
  )
}
export default Workspace
