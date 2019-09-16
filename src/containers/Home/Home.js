/*
 * @Description: 首页
 * @Author: wanjikun
 * @Data: 2019-09-10 14:31:12
 */
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './HomeStyle';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>首页</Text>
      </View>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};
