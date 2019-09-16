//引入react环境
import React, {Component, Fragment} from 'react';
//react-native
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
//react-native
class SceneNav extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('SceneNav-componentDidMount');
  }
  render() {
    return (
      <Fragment>
        <View>
          <Text>
            我是导航
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Actions.push('SceneOne');
          }}>
          <View>
            <Text>跳转1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Actions.push('SceneTwo');
          }}>
          <View>
            <Text>跳转2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Actions.push('SceneThree');
          }}>
          <View>
            <Text>跳转3</Text>
          </View>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
export default SceneNav;
