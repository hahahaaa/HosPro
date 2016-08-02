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
            <View style={styles.wrap}>
                <TouchableOpacity onPress={this.props.press}>
                    <View  style={styles.cell} >
                        <Image
                            resizeMode="stretch"
                            style={styles.img}
                            source={{uri: this.props.img}}>
                        </Image>
                        <View style={styles.text}>
                            <Text numberOfLines={2}>{this.props.title}</Text>
                            <Text numberOfLines={2} style={{fontSize:12}}>{this.props.detailTitle}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class Item6 extends Component {

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
                <View style={{margin:10,}}>
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
        flex:1,
    },
    list:{
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',

    },
    wrap:{
        flex:1,
        height:100,
        borderBottomWidth:1,
        borderBottomColor:Util.backGroundColor,
        justifyContent:"center"
    },
    cell:{
        flex:1,
        flexDirection: 'row',
        height:80,
        width:Util.size.width,

    },
    img:{
        height:80,
        width:80,
        backgroundColor:"red",

    },
    text:{
        marginLeft:10,
        width:Util.size.width - 90 ,
        justifyContent:"space-between"
    }
})

module.exports = Item6;