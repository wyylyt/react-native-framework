//引入react环境
import React, {Component, Fragment} from 'react';
//react-native
import {View, Text, TouchableOpacity} from 'react-native';
//react-native
import ScenePop from './ScenePop.js';
import SceneNav from './SceneNav.js';
class SceneTwo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('加载SceneTwo-componentDidMount');
  }
  componentWillUnmount() {
    console.log('卸载SceneTwo-componentWillUnmount');
  }
  render() {
    return (
      <Fragment>
        <ScenePop path={'SceneNav'} />
        <View>
          <Text>我是路由2</Text>
        </View>
        <SceneNav />
      </Fragment>
    );
  }
}
export default SceneTwo;
