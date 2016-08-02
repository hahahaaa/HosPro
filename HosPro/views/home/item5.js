import React, { Component } from 'react';
var Detail = require('./../detail');
var Util = require('./../util');

import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    PixelRatio,
} from 'react-native';


class Cell extends Component {
    render(){
        return(
            <View style={styles.cell}>
                <TouchableOpacity   onPress={this.props.press}>
                    <Image
                        resizeMode="stretch"
                        style={styles.img}
                        source={{uri: this.props.img}}>
                    </Image>
                    <View style={styles.text}>
                        <Text numberOfLines={1}>{this.props.title}</Text>
                        <Text numberOfLines={1} style={{fontSize:12}}>{this.props.detailTitle}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class Item5 extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataArray:this.props.item.exhibit,
            dataSource: ds,
        };
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{margin:10}}>
                    <Text>{this.props.item.title}</Text>
                </View>
                <ListView
                    horizontal={true}
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}>
                </ListView>
            </View>
        )
    }

    renderItem(item) {
        return (
            <Cell
                title={item.title}
                detailTitle = {item.desc}
                img = {item.img}
                press = {()=>this.push(item.title)}
                >
            </Cell>
        )
    }

    push(title){
        alert(title);
        //this.props.navigator.push({
        //    component:Detail,
        //    title: "detail",
        //    rightButtonTitle:"详情",
        //    onRightButtonPress:function(){
        //        alert('点击')
        //    }
        //});
    }

    fetchData(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.state.dataArray),
        })
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
    },
    list:{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'nowrap',

    },
    cell:{
        width:150,
        height:115,
        alignItems:"center",
    },
    img:{
        height:80,
        width:130,
        backgroundColor:"red",

    },
    text:{
        width:130 ,
    }
})

module.exports = Item5;