//引入react环境
import React, {Component, Fragment} from 'react';
//react-native
import {View, Text, TouchableOpacity} from 'react-native';
//react-native
import ScenePop from './ScenePop.js';
import SceneNav from './SceneNav.js';
class SceneThree extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('加载SceneThree-componentDidMount');
  }
  componentWillUnmount() {
    console.log('卸载SceneThree-componentWillUnmount');
  }
  render() {
    return (
      <Fragment>
        <ScenePop path={'SceneNav'} />
        <View>
          <Text>我是路由3</Text>
        </View>
        <SceneNav />
      </Fragment>
    );
  }
}
export default SceneThree;
