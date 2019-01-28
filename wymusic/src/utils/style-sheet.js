import React from 'react';
import {
    StyleSheet,
    Dimensions,
    NativeModules,
    Platform
} from 'react-native';

const {width, height} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;

export const S = StyleSheet.create({
    findHeader: { //发现页头部
        height: 82,
        paddingTop: StatusBarManager.HEIGHT,
        backgroundColor: '#d53c32',
        justifyContent: 'flex-end'
    },
    findHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    findHeaderSearchWrap: {
        width: 306,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 15
    },
    findHeaderSearch: {
        width: 196,
        height: 30,
        padding: 0,
        color: 'rgba(255, 255, 255, 0.6)'
    },
    findBanner: { // 轮播组件
        position: 'relative',
        height: 156
    },
    findBannerSlider: { //轮播条目
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        marginHorizontal: 5,
        borderRadius: 8
    },
    findBannerSliderImage: { // 轮播图片
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    findClassifyWrap: { // 分类组件
        width: width,
        height: 108,
        marginVertical: 17,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    findClassifyItem: {
        width: 56,
        height: 108
    },
    findClassifyImage: {
        position: 'relative',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d53c32',
        borderRadius: 25,
        elevation: 4
    },
    findClassifyDateText: {
        position: 'absolute',
        top: 22,
        color: '#fff',
        fontSize: 10
    }
});