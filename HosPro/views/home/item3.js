import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
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
            <View>
                <TouchableOpacity  style={styles.cell} onPress={this.props.press}>
                    <Text>{this.props.title}</Text>
                    <Text>{this.props.detailTitle}</Text>
                    <Image
                        resizeMode="contain"
                        style={styles.img}
                        source={{uri: this.props.img}}>
                    </Image>
                </TouchableOpacity>
            </View>
        )
    }
}

class Item3 extends Component {

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
    }

    fetchData(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.state.dataArray),
        })
    }
}

var styles = StyleSheet.create({
    container:{

    },
    list:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:"space-between",
        marginBottom:5,
    },
    cell:{
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:Util.backGroundColor,
        height:100,
        width:(Util.size.width - 10) / 3.0,
    },
    img:{
        height:45,
        width:45,
    }

})

module.exports = Item3;