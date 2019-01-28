import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

// 图标
import RadioIcon from 'react-native-vector-icons/Entypo';
import DateIcon from 'react-native-vector-icons/Feather';
import SongIcon from 'react-native-vector-icons/Ionicons';
import ChartIcon from 'react-native-vector-icons/SimpleLineIcons';

// 样式
import {S} from '../utils/style-sheet';

export default class RecommendClassifyComponent extends React.Component {
    static state = {
      date: ''
    };

    componentWillMount() {
        const Day = new Date().getDate();
        this.setState({
            date: Day
        })
    }

    render() {
        return (
            <View
                style={S.findClassifyWrap}
            >
                <View
                    style={S.findClassifyItem}
                >
                    <View
                        style={S.findClassifyImage}
                    >
                        <RadioIcon
                            name={'radio'}
                            size={30}
                            color={'#fff'}/>
                    </View>
                    <Text>
                        私人FM
                    </Text>
                </View>
                <View
                    style={S.findClassifyItem}
                >
                    <View
                        style={S.findClassifyImage}
                    >
                        <DateIcon
                            name={'calendar'}
                            size={30}
                            color={'#fff'}
                        />
                        <Text
                            style={S.findClassifyDateText}
                        >
                            {this.state.date}
                        </Text>
                    </View>
                    <Text>
                        每日推荐
                    </Text>
                </View>
                <View
                    style={S.findClassifyItem}
                >
                    <View
                        style={S.findClassifyImage}
                    >
                        <SongIcon
                            name={'ios-menu'}
                            size={30}
                            color={'#fff'}/>
                    </View>
                    <Text
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        歌单
                    </Text>
                </View>
                <View
                    style={S.findClassifyItem}
                >
                    <View
                        style={S.findClassifyImage}
                    >
                        <ChartIcon
                            name={'chart'}
                            size={30}
                            color={'#fff'}/>
                    </View>
                    <Text
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        排行榜
                    </Text>
                </View>
            </View>
        )
    }
}