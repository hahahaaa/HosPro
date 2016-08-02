import React, { Component } from 'react';
var Util = require('./../util');
var Active = require('../active');

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



class Cell extends Component {
    render() {
        return (
            <View style={styles.cell}>
                <TouchableOpacity onPress={this.props.press}>
                    <Image
                        resizeMode="contain"
                        style={styles.img}
                        source={{uri: this.props.url}}>
                    </Image>
                    <Text numberOfLines={1} style={styles.cell_text}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Item1 extends Component {
    constructor(props) {
        super(props);
        this.addList = this.addList.bind(this);
    }

    Push(title){
        const {navigator} = this.props;
        if(navigator) {
            this.props.navigator.push({
                name: 'Active',
                component: Active,
                params: {
                    //属性传值
                    name: '我是王太锁',
                    getUser: function(user) {
                        alert(user);
                    }
                }
            })
        }
    }

    addList(dataArr,i,list){
        var row = (
            <View style={styles.row} key={"row" + i}>
                <Cell
                    url = {dataArr[i].img_hover}
                    title = {dataArr[i].title}
                    press = {()=>this.Push(dataArr[i].title)}
                    >
                </Cell>
                <Cell
                    url = {dataArr[parseInt(i)+1].img_hover}
                    title = {dataArr[parseInt(i)+1].title}
                    press = {()=>this.Push(dataArr[parseInt(i)+1].title)}
                    >
                </Cell>
                <Cell
                    url = {dataArr[parseInt(i)+2].img_hover}
                    title = {dataArr[parseInt(i)+2].title}
                    press = {()=>this.Push(dataArr[parseInt(i)+2].title)}
                    >
                </Cell>
                <Cell
                    url = {dataArr[parseInt(i)+3].img_hover}
                    title = {dataArr[parseInt(i)+3].title}
                    press = {()=>this.Push(dataArr[parseInt(i)+3].title)}
                    >
                </Cell>
            </View>
        );
        list.push(row);
    }

    //scrollViewDidEndScroll(event,_scrollView){
    //    //alert(event.nativeEvent.contentOffset.x)
    //    var contentOffSetX = event.nativeEvent.contentOffset.x;
    //    alert();
    //    this.refs['abc'].style = {
    //        width:20,
    //        height:20,
    //        backgroundColor:"red"
    //    }
    //}

    render() {
        var dataArr = this.props.item.exhibit;
        var list=[];
        var list1=[];

        for (var i in dataArr) {
            if (i % 4 == 0) {
                if(i < dataArr.length / 2){
                    this.addList(dataArr,i,list);
                }else{
                    this.addList(dataArr,i,list1);
                }
            }
        }
        return (
            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:"#ddd",}}>
                <ScrollView
                    style={styles.container}
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    //onScrollEndDrag={(event)=>{
                    //    this.scrollViewDidEndScroll(event,_scrollView);
                    //}}
                    >
                    <View style={styles.part}>
                        {list}
                    </View>
                    <View style={styles.part}>
                        {list1}
                    </View>
                </ScrollView>
            </View>
            );
    }
}
//<View style={styles.pageContainer}>
//    <Text
//        ref="abc"
//        >test</Text>
//    <Text
//        ref="qwe"
//        >test</Text>
//</View>


var styles = StyleSheet.create({
    container:{
        marginTop:0,
    },
    pageContainer:{
        flexDirection:"row",
        justifyContent:"center",
    },
    part:{
      width:Util.size.width,
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-around",
    },
    cell:{
        width:PixelRatio.getPixelSizeForLayoutSize(30),
        height:PixelRatio.getPixelSizeForLayoutSize(30),
        justifyContent:"center",
    },
    cell_text:{
        color:Util.fontC,
        fontSize:14,
        height:25,
        lineHeight:18,
        textAlign:'center',
        marginTop:1,
    },
    img:{
        marginLeft:PixelRatio.getPixelSizeForLayoutSize(7.5),
        width:PixelRatio.getPixelSizeForLayoutSize(15),
        height:PixelRatio.getPixelSizeForLayoutSize(15)
    },



});


module.exports = Item1;