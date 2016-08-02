import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    ListView,
    NavigatorIOS,
    TabBarIOS
} from 'react-native';
var Util = require('./util');
var Service = require('./service');
var NavBar = require('./general/navBar');
var Item2 = require("./home/item2");
var Item5 = require("./home/item5");
var Item3 = require("./active/item2");
var Item1 = require("./active/item1");


class Active extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
        };

        this.render = this.render.bind(this);
    }
    componentDidMount() {
        this.fetchData();

    }

    fetchData(){
        var _that = this;
        Util.get(Service.host + Service.active,function(responseData){
            _that.setState({
                dataSource:_that.state.dataSource.cloneWithRows(responseData.data.list),
            })
        });
    }

    testCallBack(){
        //navigator的回调测试
        if(this.props.getUser) {
            this.props.getUser("点击");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={{marginTop:64}}
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}
                    >
                </ListView>
                <NavBar
                    navigator={this.props.navigator}
                    title="活动"
                    back="返回"
                    />
            </View>
        );
    }
    renderItem(item) {
        if (item.style == 1){
            return(
                <View>
                    <Item2 item={item}></Item2>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }
        else if (item.style == 11){
            return(
                <View>
                    <Item3 item={item}></Item3>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }
        else if (item.style == 15){
            return(
                <View>
                    <Item1 item={item}></Item1>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }
        else if (item.style == 6){
            return(
                <View>
                    <Item5 item={item}></Item5>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }
        else{
            return (
                <View>
                </View>
            )
        }
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        height:Util.size.height - 64,
        backgroundColor:"#fff",
    },

});


module.exports = Active;