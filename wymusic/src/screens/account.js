import React from 'react';
import {
    View,
    Text
} from 'react-native';
import AccountIcon from 'react-native-vector-icons/Feather';

export default class AccountScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: '账号',
        tabBarIcon(props) {
            const {focused} = props;
            return <AccountIcon
                name={'user'}
                size={22}
                color={focused ? '#d53c32' : '#b5b5b5'}
            />
        }
    };

    render() {
        return (
            <View>
                <Text>
                    AccountScreen
                </Text>
            </View>
        )
    }
}