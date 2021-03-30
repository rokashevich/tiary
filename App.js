import React, { useState, useContext } from 'react';
import { TouchableOpacity, Text, View, ScrollView, Dimensions, FlatList } from 'react-native';
import { Icons } from './Icons';
import { Categories } from './Db';
import AppContext from './AppContext';

const Tile = (props) => {
    const context = useContext(AppContext);

    const size = context.tileSize
    const text_length = props.text.length
    const font_size = size / (props.text.length > 5 ? 5 : props.text.length)
    const text = props.text.match(/.{1,5}/g).join("\n")
    return <View style={{
        width: size,
        height: size,
        backgroundColor: 'darkgray',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    }} >
        <Text adjustsFontSizeToFit={true} minimumFontScale={0.01}
            style={{ color: 'black', fontSize: font_size, textAlign: 'center' }}>
            {text}
        </Text>
    </View>

}


const HeaderButtons = () => {
    const context = useContext(AppContext);
    return Categories.map((item) => (
        <TouchableOpacity
            onPress={() => { context.setTabId(item.id) }}
            style={{ background: item.id == context.tabId ? 'gray' : 'darkgray' }}>
            <Icons name={item.name} color={item.color} size={context.tileSize} />
            <Text style={{ position: 'absolute', bottom: 0, right: 0, background: item.color, color: 'white' }}>{item.id}</Text>
        </TouchableOpacity>
    ))
}

const Header = () => {

    return <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}>
        <HeaderButtons />
    </ScrollView>
}

const TableRow = (props) => {
    return [0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Tile text={props.values.name} first={i == 0 ? true : false} />
    ))
}

const Table = () => {
    const renderItem = ({ item }) => <View horizontal style={{ flexDirection: 'row' }}>
        <TableRow values={item} />
    </View>
    return <FlatList
        style={{ borderWidth: 1 }}
        data={Categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />
}

const DebugBar = () => {
    const context = useContext(AppContext);
    return <Text style={{ position: 'absolute', textShadowColor: '#f0f', textShadowOffset: { width: -1, height: 1 } }}>
        tabId={context.tabId}
    </Text>
}

const App = () => {
    const [tileSize, setTabSize] = useState(50)
    const [tabId, setTabId] = useState(666)
    const [setting1value, setSetting1value] = useState('initialValue1');
    const [setting2value, setSetting2value] = useState(false);
    const toggleSetting2 = () => {
        setting3 ? setSetting2(true) : setSetting2value(false);
    };
    const userSettings = {
        tileSize: tileSize,
        tabId: tabId,
        setting1name: setting1value,
        setting2name: setting2value,
        setTabId,
        setSetting1value,
        toggleSetting2,
    };
    // const base_size = userSettings.tileSize
    // const screen_width = Dimensions.get('window').width
    // const max_columns = Math.floor(screen_width / base_size)
    // const tile_size = Math.floor(screen_width / max_columns)
    // const pixels_left = screen_width - tile_size * max_columns
    return <AppContext.Provider value={userSettings}>
        <View>
            <Header />
            <Table />
            <DebugBar />
        </View>
    </AppContext.Provider>
}

export default App;
