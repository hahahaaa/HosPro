import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
var Util = require('./../util');

import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    NavigatorIOS,
    TabBarIOS,
    TouchableOpacity,
    Image,
    PixelRatio,
} from 'react-native';


class Item2 extends Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    push(ids){
        alert(ids);
    }

    render() {
        let dataArr = this.props.item.exhibit;
        let list = [];
        for(let i = 0;i<dataArr.length;i++){
            var slide = (
                <TouchableOpacity  key={"slide" + i} onPress={()=>this.push(dataArr[i].dmid)}>
                    <View style={styles.slide1} >
                        <Image
                            resizeMode="contain"
                            style={styles.img}
                            source={{uri: dataArr[i].img}}>
                        </Image>
                    </View>
                </TouchableOpacity>
            )
            list.push(slide);
        }
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper}
                        autoplay={true}
                        showsPagination={false}
                    >
                    {list}
                </Swiper>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        height:Util.size.width / 3,
        backgroundColor:Util.backGroundColor,
    },
    wrapper: {
    },
    img:{
        width:Util.size.width,
        height:Util.size.width / 3,
    },

})


module.exports = Item2;