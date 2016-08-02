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
                <TouchableOpacity  style={styles.cell} onPress={this.props.press}>
                    <Image
                        resizeMode="contain"
                        style={styles.img}
                        source={{uri: this.props.img}}>
                    </Image>
                    <View style={styles.text}>
                        <Text numberOfLines={2}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class Item2 extends Component {

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
        this.props.navigator.push({
            component:Detail,
            title: "detail",
            rightButtonTitle:"详情",
            onRightButtonPress:function(){
                alert('点击')
            }
        });
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
        flexWrap: 'wrap',
    },
    cell:{
        flexDirection: 'row',
        width:(Util.size.width ) / 2.0,
        height:40,
        marginBottom:10,
        alignItems:"center",
        justifyContent:"center",
    },
    img:{
        marginLeft:5,
        marginRight:5,
        height:35,
        width:35,
    },
    text:{
        marginLeft:10,
        width:(Util.size.width ) / 2.0 - 60,
        justifyContent:"space-between",
    }

})

module.exports = Item2;