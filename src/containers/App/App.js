// 引入react环境
import React, { Component, Fragment } from 'react';
// 引入router
import { Scene, Router, Actions } from 'react-native-router-flux';
import {
  Home,
} from 'con/index';
import {
// Home,
} from 'com/index';

console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Router sceneStyle={{ backgroundColor: 'white' }}>
          <Scene key="root">
            <Scene
              key="Home"
              // hideNavBar
              component={Home}
              title="首页"
            />
          </Scene>
        </Router>
      </Fragment>
    );
  }
}
export default App;
