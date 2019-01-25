import React from 'react';
import {
    View,
    Text
} from 'react-native';
import MyIcon from 'react-native-vector-icons/Ionicons'

export default class MyScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon(props) {
            const {focused} = props;
            return <MyIcon
                name={'md-musical-notes'}
                size={22}
                color={focused ? '#d53c32' : '#b5b5b5'}
            />
        }
    };
    render() {
        return (
            <View>
                <Text>
                    MyScreen
                </Text>
            </View>
        )
    }
}