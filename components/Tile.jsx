import React, { useContext } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import AppContext from '../AppContext'
import { Icon } from '../Icons'

const Tile = props => {
  const context = useContext(AppContext)
  const size = context.tileSize
  const timeFiller = time => {
    const YYYY = time[0] + time[1] + time[2] + time[3]
    const MM = time[4] + time[5]
    const DD = time[6] + time[7]
    const hh = time[8] + time[9]
    const mm = time[10] + time[11]
    return (
      <Text style={{ color: 'white' }}>
        {YYYY}
        {'\n'}
        {MM}.{DD}
        {'\n'}
        {hh}:{mm}
      </Text>
    )
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: props.background,
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: 1,
          borderBottomWidth: 1,
          borderColor: 'white'
        }}>
        {props.icon && (
          <Icon
            icon={props.icon}
            foreground={props.iconColors[0]}
            size={size}
          />
        )}
        {props.texts &&
          props.texts.map((e, i) => (
            <Text
              key={i}
              style={{
                position: 'absolute'
                // bottom: 1,
                // right: 1,
                // background: '#ffffff',
                // color: '#000000'
              }}>
              {e.text}
            </Text>
          ))}
        {props.time && timeFiller(props.time)}
      </View>
    </TouchableOpacity>
  )
}
export default Tile