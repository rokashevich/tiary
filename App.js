import React, { Component, useState } from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView, Dimensions, PixelRatio, FlatList } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Icons, Backetball, Car, School, Food, Cog } from './Icons';

import { Categories, Tables, DATA } from './Db';

const ButtonsRow = (props) => {

    const categories = Categories

    return categories.map((button) => (
        <TouchableOpacity
            onPress={() => {
                console.log(button.id)
                props.handler({ node: button.id })
            }}
            style={{
                background: 'gray'
            }}>
            <Icons name={button.name} color={button.color} size={props.geometry.size} />
            <Text style={{ position: 'absolute', bottom: 0, right: 0, background: button.color, color: 'white' }}>{button.id}</Text>
        </TouchableOpacity>
    ))
}

const Tile = (props) => {
    const text_length = props.text.length
    const font_size = props.geometry.size / (props.text.length > 5 ? 5 : props.text.length)
    const text = props.text.match(/.{1,5}/g).join("\n")
    const size = props.geometry.size - 1
    return (
        <View style={{
            width: size + (props.first ? props.geometry.pixels_left : 0),
            height: size,
            backgroundColor: 'darkgray',
            justifyContent: 'center',
            alignItems: 'center',
        }} >
            <Text adjustsFontSizeToFit={true} minimumFontScale={0.01}
                style={{ color: 'black', fontSize: font_size, textAlign: 'center' }}>
                {text}
            </Text>
        </View>
    )
}

const ValueRow = (props) => {
    return [0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Tile geometry={props.geometry} text={props.values.name} first={i == 0 ? true : false} />
    ))
}

const App = () => {
    const [node, setNode] = useState({ node: 10 });

    // Размер тайла, кол-во колонок зависят от размера экранчика и плотности пикселей.
    const base_size = 55
    const screen_width = Dimensions.get('window').width
    const max_columns = Math.floor(screen_width / base_size)
    const tile_size = Math.floor(screen_width / max_columns)
    const pixels_left = screen_width - tile_size * max_columns

    //base_size + Math.floor(( screen_width - max_columns*base_size ) / max_columns)
    const forced_padding = screen_width - max_columns * tile_size
    const [geometry, setGeometry] = useState({ size: tile_size, columns: max_columns, pixels_left: pixels_left });
    console.log("--- Dimensions:")
    console.log("screen_width=" + screen_width)
    console.log("tile_size=" + base_size + "->" + tile_size + " (" + pixels_left + " pixels left)")

    const renderItem = ({ item }) => (
        <View horizontal style={{ background: '#0000ff', flex: 1, flexDirection: 'row', marginBottom: 0 }}>
            <ValueRow geometry={geometry} values={item} />
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'cyan' }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0, marginLeft: pixels_left }}>
                <ButtonsRow handler={setNode} geometry={geometry} />
            </ScrollView>

            <FlatList
                style={{ flex: 1, backgroundColor: '#ccc' }}
                data={Categories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Text style={{ position: 'absolute', textShadowColor: '#0ff', textShadowOffset: { width: -1, height: 1 } }}>DEBUG OVERLAY</Text>
        </View>
    )
}

export default App;
