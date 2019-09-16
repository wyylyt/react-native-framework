//引入react环境
import React, {Component, Fragment} from 'react';
//react-native
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
//react-native
class ScenePop extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('ScenePop-componentDidMount');
  }
  render() {
    return (
      <Fragment>
        <TouchableOpacity
          onPress={() => {
            let path = this.props.path;
            // Actions.popTo(path);
            Actions.pop();
          }}>
          <View>
            <Text>返回</Text>
          </View>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
export default ScenePop;
