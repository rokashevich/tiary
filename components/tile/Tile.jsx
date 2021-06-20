import React, { useContext } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import AppContext from '../../AppContext'
import { Icon } from '../../Icons'

const Tile = props => {
  const context = useContext(AppContext)
  const size = context.geometry.tileSize

  const onPress = props.onPress
  const background = props.background ? props.background : '#f0f'
  const foreground = props.foreground ? props.foreground : '#0ff'
  const badge = props.badge ? `${props.badge}` : null
  const scaleX = props.scaleX ? props.scaleX : 1
  const scaleY = props.scaleY ? props.scaleY : 1
  const icon = props.icon
  const label = props.label

  const Time = props => {
    const time = props.time
    const YYYY = time[0] + time[1] + time[2] + time[3]
    const MM = time[4] + time[5]
    const DD = time[6] + time[7]
    const hh = time[8] + time[9]
    const mm = time[10] + time[11]
    return (
      <Text
        style={{ color: props.foreground, textAlign: 'center' }}
        adjustsFontSizeToFit={true}>
        {YYYY}
        {'\n'}
        {MM}.{DD}
        {'\n'}
        {hh}:{mm}
      </Text>
    )
  }
  const Badge = props => (
    <Text
      style={{
        position: 'absolute',
        bottom: 1,
        right: 1,
        backgroundColor: '#000',
        color: '#fff'
      }}>
      {props.badge}
    </Text>
  )

  // https://gist.github.com/kitze/23d82bb9eb0baabfd03a6a720b1d637f
  const ConditionalWrap = ({ condition, wrap, children }) =>
    condition ? wrap(children) : <>{children}</>

  const TileFrame = () => (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: background,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'blue'
      }}>
      {icon && <Icon icon={icon} foreground={foreground} size={size} />}
      {badge && <Badge badge={badge} />}
      {props.header && (
        <Text
          adjustsFontSizeToFit={true}
          style={{
            color: props.foreground,
            textAlign: 'center'
          }}>
          {props.header}
        </Text>
      )}
      {props.value && <Text>{props.value}</Text>}
      {props.time && <Time {...props} />}
    </View>
  )

  return (
    <ConditionalWrap
      condition={onPress}
      wrap={children => (
        <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
      )}>
      <TileFrame />
    </ConditionalWrap>
  )
}
export default Tile
