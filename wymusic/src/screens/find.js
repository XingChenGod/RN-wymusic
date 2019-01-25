import React from 'react';
import {
    View,
    Text,
    TextInput,
    NativeModules
} from 'react-native';
import SearchIcon from "react-native-vector-icons/AntDesign";
import MicrophoneIcon from 'react-native-vector-icons/SimpleLineIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import MenuIcon from 'react-native-vector-icons/Feather'

// 组件
import Statusbar from '../components/statusbar';

const { StatusBarManager } = NativeModules;

export default class FindScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: '发现',
        tabBarIcon(props) {
            const {focused} = props;
            return (
                <SearchIcon
                    name={'search1'}
                    size={22}
                    color={focused ? '#d53c32' : '#b5b5b5'}
                />
            )
        }
    };

    render() {
        return (
            <View>
                <Statusbar/>
                <View
                    style={{
                        height: 82,
                        paddingTop: StatusBarManager.HEIGHT,
                        backgroundColor: '#d53c32',
                        justifyContent: 'flex-end'
                    }}
                >
                    {
                        // 麦克风，搜索框，音波
                    }
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }}
                    >
                        <MicrophoneIcon
                            name={'microphone'}
                            size={24}
                            color={'#fff'}
                        />
                        <View
                            style={{
                                width: 306,
                                height: 30,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                borderRadius: 15
                            }}
                        >
                            <Icon
                                name={'ios-search'}
                                size={20}
                                color={'rgba(255, 255, 255, 0.5)'}
                                style={{
                                    marginRight: 8
                                }}
                            />
                            <TextInput
                                style={{
                                    width: 196,
                                    height: 30,
                                    padding: 0,
                                    textIndent: 4,
                                    color: 'rgba(255, 255, 255, 0.6)'
                                }}
                                placeholder={'Here With You - Asher Monroe'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                            />
                        </View>
                        <MenuIcon
                            name={'menu'}
                            size={24}
                            color={'#fff'}
                        />
                    </View>
                </View>
            </View>
        )
    }
}