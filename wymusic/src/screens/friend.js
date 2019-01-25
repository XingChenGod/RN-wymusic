import React from 'react';
import {
    View,
    Text
} from 'react-native';
import FriendIcon from 'react-native-vector-icons/Feather';

export default class FriendScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: '朋友',
        tabBarIcon(props) {
            const {focused} = props;
            return <FriendIcon
                name={'users'}
                size={22}
                color={focused ? '#d53c32' : '#b5b5b5'}
            />
        }
    };

    render() {
        return (
            <View>
                <Text>
                    FriendScreen
                </Text>
            </View>
        )
    }
}