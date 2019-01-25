import React from 'react';
import {
    View,
    Text
} from 'react-native';
import VideoIcon from "react-native-vector-icons/MaterialIcons";

export default class VideoScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: '视频',
        tabBarIcon(props) {
            const {focused} = props;
            return (
                <VideoIcon
                    name={'ondemand-video'}
                    size={22}
                    color={focused ? '#d53c32' : '#b5b5b5'}
                />
            )
        }
    };

    render() {
        return (
            <View>
                <Text>
                    VideoScreen
                </Text>
            </View>
        )
    }
}