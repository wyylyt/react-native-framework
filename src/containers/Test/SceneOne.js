//引入react环境
import React, {Component, Fragment} from 'react';
//react-native
import {View, Text, TouchableOpacity} from 'react-native';

import ScenePop from './ScenePop.js';
import SceneNav from './SceneNav.js';
class SceneOne extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('加载SceneOne-componentDidMount');
  }
  componentWillUnmount() {
    console.log('卸载SceneOne-componentWillUnmount');
  }
  render() {
    return (
      <Fragment>
        <ScenePop path={'SceneNav'} />
        <View>
          <Text>我是路由1</Text>
        </View>
        <SceneNav />
      </Fragment>
    );
  }
}
export default SceneOne;
