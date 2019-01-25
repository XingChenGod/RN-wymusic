// 状态栏组件
import React from 'react';
import {
    StatusBar
} from 'react-native';

export default class Statusbar extends React.Component {
    render() {
        return <StatusBar
            barStyle={'light-content'}
            backgroundColor={'transparent'}
            translucent={true}
        />
    }
}