import React from 'react';
import {
    View,
    TextInput,
    NativeModules,
    ScrollView
} from 'react-native';
import SearchIcon from "react-native-vector-icons/AntDesign";
import MicrophoneIcon from 'react-native-vector-icons/SimpleLineIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import MenuIcon from 'react-native-vector-icons/Feather'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

// 组件
import Statusbar from '../components/statusbar';
import RecommendBannerComponent from '../components/recommend-banner';
import RecommendClassifyComponent from '../components/recommend-classify';
import AnchorStationComponent from '../components/anchor-station';

// 样式
import {S} from '../utils/style-sheet';

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
                    style={S.findHeader}
                >
                    {/*麦克风，搜索框，音波*/}
                    <View
                        style={S.findHeaderContainer}
                        >
                        <MicrophoneIcon
                            name={'microphone'}
                            size={24}
                            color={'#fff'}
                        />
                        <View
                            style={S.findHeaderSearchWrap}
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
                                style={S.findHeaderSearch}
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
                {/*个性推荐，主播电台*/}
                <View
                    style={{
                        height: '100%'
                    }}
                >
                    <ScrollableTabView
                        scrollWithoutAnimation={true}
                        tabBarInactiveTextColor={'#fff'}
                        tabBarActiveTextColor={'#fff'}
                        tabBarUnderlineStyle={{
                            width: 30,
                            height: 4,
                            marginLeft: 30,
                            backgroundColor: '#fff',
                            borderRadius: 4
                        }}
                        renderTabBar={() =>
                            (
                                <ScrollableTabBar
                                    style={{
                                        height: 40,
                                        backgroundColor: '#d53c32'
                                    }}
                                />
                            )
                        }
                    >
                        <View
                            style={{
                                marginTop: 10,
                                position: 'relative'
                            }}
                            tabLabel={'个性推荐'}>
                            <ScrollView>
                                <View>
                                    {/*轮播*/}
                                    <RecommendBannerComponent/>
                                    {/*分类*/}
                                    <RecommendClassifyComponent/>
                                </View>
                            </ScrollView>
                        </View>
                        <AnchorStationComponent
                            tabLabel={'主播电台'}
                        />
                    </ScrollableTabView>
                </View>
            </View>
        )
    }
}