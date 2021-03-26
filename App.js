import React, { Component, useState, useContext } from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView, Dimensions, PixelRatio, FlatList } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Icons, Backetball, Car, School, Food, Cog } from './Icons';
import { Categories, Tables, DATA } from './Db';
import AppContext from './AppContext';

const ButtonsRow = (props) => {

    const categories = Categories

    return categories.map((item) => (
        <TouchableOpacity
            onPress={() => {
                // console.log(item.id)
            }}
            style={{
                background: 'gray'
            }}>
            <Icons name={item.name} color={item.color} size={props.geometry.size} />
            <Text style={{ position: 'absolute', bottom: 0, right: 0, background: item.color, color: 'white' }}>{item.id}</Text>
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
    const [setting1value, setSetting1value] = useState('initialValue1');
    const [setting2value, setSetting2value] = useState(false);
    const toggleSetting2 = () => {
        setting3 ? setSetting2(true) : setSetting2value(false);
    };
    const userSettings = {
        setting1name: setting1value,
        setting2name: setting2value,
        setSetting1value,
        toggleSetting2,
    };
    // const myContext = useContext(AppContext);

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
        <AppContext.Provider value={userSettings}>
            <View style={{ flex: 1, backgroundColor: 'cyan' }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ flexGrow: 0, marginLeft: pixels_left }}>
                    {/* <ButtonsRow geometry={geometry} /> */}
                </ScrollView>

                <FlatList
                    style={{ flex: 1, backgroundColor: '#ccc' }}
                    data={Categories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <Text style={{ position: 'absolute', textShadowColor: '#0ff', textShadowOffset: { width: -1, height: 1 } }}>
                    active_tab_id={userSettings.setting1name}
                </Text>
            </View>
        </AppContext.Provider>
    )
}

export default App;
