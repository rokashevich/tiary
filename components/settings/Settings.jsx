import React, { useContext } from 'react'
import Tile from '../Tile'
import { View, Text } from 'react-native'
import s from './Settings.style.js'
import AppContext from '../../AppContext'
const Settings = () => {
  const context = useContext(AppContext)
  return (
    <View style={s.settings}>
      <Tile
        {...{
          onPress: () => {
            context.setWorkspace(true)
          },
          background: 'lightgray',
          icon: 'Cog',
          foreground: 'black'
        }}
      />
    </View>
  )
}
export default Settings
