//引入react环境
import React, {Component, Fragment} from 'react';
//react-native
import {View, Text, TouchableOpacity} from 'react-native';
//引入router
import {Scene, Router, Actions, Stack, Tabs} from 'react-native-router-flux';
import SceneOne from './SceneOne.js';
import SceneTwo from './SceneTwo.js';
import SceneThree from './SceneThree.js';
import SceneNav from './SceneNav.js';

class Test extends Component {
  constructor(props) {
    super(props);
    this.stateHandler = this.stateHandler.bind(this);
  }
  stateHandler() {
    console.log('Router-更改');
  }
  render() {
    return (
      <Fragment>
        <Router onStateChange={this.stateHandler}>
          <Scene key="root">
            <Scene
              key={'SceneNav'}
              hideNavBar
              component={SceneNav}
              initial={true}
              title={'SceneNav'}
            />
            <Scene key={'SceneOne'} component={SceneOne} title={'SceneOne'} />
            <Scene key={'SceneTwo'} component={SceneTwo} title={'SceneTwo'} />
            <Scene
              key={'SceneThree'}
              component={SceneThree}
              title={'SceneThree'}
            />
          </Scene>
        </Router>
      </Fragment>
    );
  }
}
export default Test;
