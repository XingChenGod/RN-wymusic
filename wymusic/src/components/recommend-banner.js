import React from 'react'
import {
    View,
    Image
} from 'react-native';

import Swiper from 'react-native-swiper';

// 样式
import {S} from '../utils/style-sheet';


export default class RecommendBannerComponent extends React.Component {
    state = {
        banner: []
    };
    componentWillMount() {
        this.setState({
            banner: [
                'http://www.xingchenlegendary.top/RN-assets/recommendation0.png',
                'http://www.xingchenlegendary.top/RN-assets/recommendation1.png',
                'http://www.xingchenlegendary.top/RN-assets/recommendation2.png',
                'http://www.xingchenlegendary.top/RN-assets/recommendation3.png',
                'http://www.xingchenlegendary.top/RN-assets/recommendation4.png',
                'http://www.xingchenlegendary.top/RN-assets/recommendation5.png',
                'http://www.xingchenlegendary.top/RN-assets/recommendation6.png'
            ]
        })
    }

    render() {
        return (
            <View
                style={S.findBanner}
            >
                <Swiper
                    style={{}}
                    autoplay
                    activeDotColor={'red'}
                    autoplayTimeout={2}>
                    <View
                        style={S.findBannerSlider}>
                        <Image
                            style={S.findBannerSliderImage}
                            source={require('../assets/recommendation0.png')}/>
                    </View>
                    <View
                        style={S.findBannerSlider}>
                        <Image
                            style={S.findBannerSliderImage}
                            source={require('../assets/recommendation1.png')}/>
                    </View>
                    <View
                        style={S.findBannerSlider}>
                        <Image
                            style={S.findBannerSliderImage}
                            source={require('../assets/recommendation2.png')}/>
                    </View>
                </Swiper>
            </View>
        )
    }
}