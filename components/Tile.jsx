import React, { useContext } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import AppContext from '../AppContext'
import { Icon } from '../Icons'

const Tile = props => {
  const context = useContext(AppContext)
  const size = context.tileSize
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: props.background,
          justifyContent: 'center',
          alignItems: 'center',
          borderLeftWidth: 1, //props.first ? 1 : 0,
          borderRightWidth: 1,
          borderBottomWidth: 1,
          borderColor: 'white'
        }}>
        <Icon icon={props.icon} foreground={props.iconColors[0]} size={size} />
        <Text
          style={{
            position: 'absolute',
            bottom: 1,
            right: 1,
            background: '#ffffff',
            color: '#000000'
          }}>
          {props.id}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
export default Tile
