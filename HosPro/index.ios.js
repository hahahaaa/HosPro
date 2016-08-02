/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var Home = require('./views/home');
import TabNavigator from 'react-native-tab-navigator';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TabBarIOS,
    Navigator,
    View,
    Image,
} from 'react-native';

class HosPro extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedTab: 'home'
    }
  }
  _addNavigator(component, title) {
      return  <Navigator
          initialRoute={{ name: title, component: component }}
          configureScene=
              {
          (route) => {
          return Navigator.SceneConfigs.PushFromRight;
        }
        }
          renderScene={
            (route, navigator) =>
             {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }
          } />
  }
//<TabNavigator
//tabBarStyle={{ height: 60 }}
//>
//<TabNavigator.Item
//selected={this.state.selectedTab === 'home'}
//title="主页"
//renderIcon={() => <Image style={styles.img} source={require('./home_tab_home_normal.png') }/>}
//renderSelectedIcon={() => <Image style={styles.img} source={require('./home_tab_home_pressed.png') }/>}
//badgeText="200"
//
//onPress={() => this.setState({ selectedTab: 'home' })}
//
//>
//{this._addNavigator(Home, '约约')}
//</TabNavigator.Item>
//
//<TabNavigator.Item
//selected={this.state.selectedTab === 'setting'}
//title="设置"
//renderIcon={() => <Image style={styles.img} source={require('./home_tab_setting_normal.png') }/>}
//renderSelectedIcon={() => <Image style={styles.img} source={require('./home_tab_setting_pressed.png') }/>}
//renderBadge={() => <Text>hh</Text>}
//onPress={() => this.setState({ selectedTab: 'setting' })}
//
//>

//{this._addNavigator(Home, '约约')}
//</TabNavigator.Item>
//
//
//</TabNavigator>

    render() {
    return (
        <TabBarIOS
        >
            <TabBarIOS.Item
                selected={this.state.selectedTab === 'home'}
                systemIcon="history"
                onPress={() => {
                    this.setState({
                        selectedTab: 'home'
                    })
                }}>
                {this._addNavigator(Home, '约约')}
            </TabBarIOS.Item>
            <TabBarIOS.Item
                selected={this.state.selectedTab === 'bookmarks'}
                systemIcon="bookmarks"
                onPress={() => {
                    this.setState({
                        selectedTab: 'bookmarks'
                    })
                }}>
                {this._addNavigator(Home, '约约')}
            </TabBarIOS.Item>
        </TabBarIOS>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HosPro', () => HosPro);
