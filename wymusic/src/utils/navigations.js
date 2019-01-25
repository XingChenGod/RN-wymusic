import React from 'react';

export default class Navigations {
    navigationOptions(label, icon) {
        return {
            tabBarLabel: label,
            tabBarIcon(props) {
                const {focused} = props;
                return icon
            }
        }
    }
}