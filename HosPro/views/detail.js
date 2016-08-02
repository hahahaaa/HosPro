import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    NavigatorIOS,
    TabBarIOS
} from 'react-native';



var Detail = React.createClass({
    render: function() {
        return (
            <ScrollView style={{flex:1}}>
                <View style={styles.item1}>
                    <Text onPress={this.goTo}>my</Text>
                </View>
                <View style={styles.item2}>
                    <Text onPress={this.goTo}>view</Text>
                </View>
            </ScrollView>
        );
    },
})

var styles = StyleSheet.create({
    flex:{
        flex:1
    },
    item1:{
        backgroundColor:"red",
        borderColor:"green",
        borderWidth:1
    },
    item2:{
        backgroundColor:"red",
        borderColor:"green",
        borderWidth:1
    }

});


module.exports = Detail;