import React, { Component } from 'react';
var Util = require('./../util');
var Detail = require('../detail');

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
} from 'react-native';


class NavBar extends Component {
    back(){
        const {navigator} = this.props;
        if(navigator) {
            this.props.navigator.pop();
        }
    }
    render() {
        return (
            <View style={styles.bar}>
                <View style={styles.entity}>
                    <View>
                        <Text onPress={()=>this.back()}>{this.props.back}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title:{
      fontSize:16,
    },
    bar:{
        flex:1,
        height:64,
        position:"absolute",
        top:0,
        width:320,
        backgroundColor:"#fff",
    },
    entity:{
        marginTop:25,
        height:39,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        borderBottomWidth:Util.pixel,
        borderBottomColor:Util.lineColor,
    }
})

module.exports = NavBar;