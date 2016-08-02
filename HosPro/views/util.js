
import React, { Component } from 'react';
import {
    PixelRatio
} from 'react-native';

var Dimensions = require('Dimensions');


var Util = {
    //单位像素
    pixel: 1 / PixelRatio.get(),
    main_color:"#2DB4AA",
    backGroundColor:"#F5F5F5",
    lineColor:"#e1e1e1",
    //屏幕尺寸
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    fontC: "#666",

    //get请求
    get: function (url,callback) {
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                callback(responseData);
            });
    },
    //post请求
    post: function (url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
            callback(JSON.parse(responseText));
        });
    },
    //Key
    key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE'

};

module.exports = Util;