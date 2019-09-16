import {StyleSheet} from 'react-native';
import {UiHeight, UiWidth, PtToDp} from 'method/Dimension.js';
const styles = StyleSheet.create({
  tabBar: {
    height: UiHeight(143),
  },
  tabIcon: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  labelStyle: {
    fontSize: PtToDp(34),
    marginBottom: UiHeight(8),
  },
  bgCircle: {
    borderRadius: UiWidth(64),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#fff',
    width: UiWidth(128),
    height: UiHeight(64),
    // marginTop: pId(-152),
    marginTop: UiHeight(-148),
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  minCircle: {
    borderRadius: UiWidth(62),
    width: UiWidth(124),
    height: UiHeight(124),
  },
  imgStyle: {width: UiWidth(60), height: UiHeight(60), marginTop: UiHeight(18)},
  myTabBarStyle: {
    width: '100%',
    height: UiHeight(209),
    // backgroundColor: 'red',
  },
  navBg: {
    width: '100%',
    height: UiHeight(209),
  },
});

export default styles;
