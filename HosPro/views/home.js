import React, { Component } from 'react';
var Item1 = require("./home/item1");
var Item2 = require("./home/item2");
var Item3 = require("./home/item3");
var Item4 = require("./home/item4");
var Item5 = require("./home/item5");
var Item6 = require("./home/item6");
var Util = require('./util');
var Service = require('./service');
var Detail = require('./detail');
var NavBar = require('./general/navBar');

import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    ListView,
    Text,
    RefreshControl,
    TouchableOpacity,
    View
} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            isRefreshing: false,
        };
        this.renderItem = this.renderItem.bind(this);
        this.render = this.render.bind(this);

    }

    componentDidMount() {
        this.fetchData();
    }

    goTo(){
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
            })
        }
    }
    endRefresh(){
        this.setState({
            isRefreshing:false,
        })
    }

    _onRefresh() {
        this.setState({
            isRefreshing:true,
        })
        for(let i = 0;i<10000;i++){
            console.log(i);
            i++;
            if (i == 9999){
                this.endRefresh();
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView

                    style={{marginTop:54}}
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    onScroll = {() => {  }}
                    //renderHeader={this.renderHeader}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={()=>this._onRefresh()}
                        tintColor="#d6d6d6"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                        />
                    }>
                </ListView>
                <NavBar
                    navigator={this.props.navigator}
                    title="约约"
                    />
            </View>
        );
    }


    renderItem(item) {
        if (item.style == 10){
            return(
                <View>
                    <Item1
                        item={item}
                        navigator={this.props.navigator}
                        ></Item1>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }else if(item.style == 1 || item.style == 9){
            return(
                <View>
                    <Item2 item={item}></Item2>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }else if(item.style == 3) {
            return (
                <View>
                    <Item3 item={item}></Item3>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }else if(item.style == 7){
            return(
                <View>
                    <Item4 item={item}></Item4>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }
        else if(item.style == 4) {
            return(
                <View>
                    <Item5 item={item}></Item5>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }
        else{
            return(
                <View>
                    <Item6 item={item}></Item6>
                    <View style={{backgroundColor:Util.backGroundColor,height:8}}></View>
                </View>
            )
        }

    }


    fetchData(){
        var _that = this;
        Util.get(Service.host + Service.home,function(responseData){
            _that.setState({
                dataSource:_that.state.dataSource.cloneWithRows(responseData.data.list),
            })
        });
    }
}


var styles = StyleSheet.create({

    container: {
        flex:1,
        height:Util.size.height - 64,
    },

    Item: {
        flexDirection:"row",
        borderWidth:1,
    },

    vv: {
        backgroundColor:"yellow",
        position:"absolute",
        height:10,
        width:20,
        bottom:200,
        right:60
    }


});

module.exports = Home;
