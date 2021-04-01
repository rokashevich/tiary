import React, { useState, useContext } from 'react';
import { TouchableOpacity, Text, View, ScrollView, Dimensions, FlatList } from 'react-native';
import { Icon } from './Icons';
import { Categories } from './Db';
import AppContext from './AppContext';

const TileOld = (props) => {
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
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        borderRightWidth: 1,
        borderRightColor: 'white',
        borderLeftWidth: props.first ? 1 : 0,
        borderLeftColor: 'white'
    }} >
        <Text adjustsFontSizeToFit={true} minimumFontScale={0.01}
            style={{ color: 'black', fontSize: font_size, textAlign: 'center' }}>
            {text}
        </Text>
    </View>
}

// Svg-кнопка для заголовочной панели.
const Tab = (props) => {
    const context = useContext(AppContext);
    return <>
        <Icon icon={props.data.icon} foreground={props.data.foreground} size={context.tileSize} />
        <Text style={{ position: 'absolute', bottom: 1, right: 1, background: '#ffffff', color: '#000000' }}>x</Text>
    </>
}
// Клетка с временем в первом столбце.
const Timestamp = (props) => {
    return <Text style={{ fontSize: 10 }} > 2021.12.31</Text >
}
// Клетки с данными таблицы.
const Value = (props) => { return <Text>1</Text> }

/**
 * Наполнители для базовой клеточки
 * https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
 */
const fillers = {
    tab: Tab,
    timestamp: Timestamp,
    value: Value
}

// Основной контейнер клетки.
const Tile = (props) => {
    const context = useContext(AppContext);
    const Filler = fillers[props.filler]
    return <View style={{
        width: context.tileSize,
        height: context.tileSize,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: props.first ? 1 : 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'white'
    }}>
        <TouchableOpacity
            onPress={props.click}
        >
            <Filler data={props.data} />
        </TouchableOpacity>
    </View>
}

const Bar = () => {
    const context = useContext(AppContext);
    const setId = (id) => {
        context.setTabId(id)
    }
    return Categories.map((currentValue, index) => (
        <Tile filler="tab" click={() => setId(index)} data={currentValue} first={index == 0 ? true : false} />
    ))
}

const Bar2 = () => {
    const context = useContext(AppContext);
    return Categories.map((item) => (
        <TouchableOpacity
            onPress={() => { context.setTabId(item.id) }}
            style={{ background: item.id == context.tabId ? 'gray' : 'darkgray' }}>
            <Icon name={item.name} color={item.color} size={context.tileSize} />
            <Text style={{ position: 'absolute', bottom: 0, right: 0, background: item.color, color: 'white' }}>{item.id}</Text>
        </TouchableOpacity>
    ))
}

const Header = () => {
    return <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}>
        <Bar />
    </ScrollView>
}

const TableRow = (props) => {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <Tile click={() => void 0} first={false} filler="value" first={i == 0 ? true : false} />
    ))
    values.unshift(<Tile first={true} filler="timestamp" />)
    return values
}

const Table = () => {
    const renderItem = ({ item }) => <View horizontal style={{ flexDirection: 'row' }}>
        <TableRow values={item} />
    </View>
    return <FlatList
        style={{}}
        data={Categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />
}

const DebugBar = () => {
    const context = useContext(AppContext);
    return <Text style={{ position: 'absolute', textShadowColor: '#fff', textShadowOffset: { width: -1, height: 1 } }}>
        tabId={context.tabId}
    </Text>
}

const App = () => {
    const [tileSize, setTabSize] = useState(50)
    const [tabId, setTabId] = useState(666)
    const [selectedTables, setSelectedTables] = useState([])
    const [setting1value, setSetting1value] = useState('initialValue1');
    const [setting2value, setSetting2value] = useState(false);
    const toggleSetting2 = () => {
        setting3 ? setSetting2(true) : setSetting2value(false);
    };
    const userSettings = {
        tileSize: tileSize,
        tabId: tabId,
        selectedTables: selectedTables,
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
