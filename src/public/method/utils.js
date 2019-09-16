/**
 * 处理像素点
 */
import { Dimensions } from 'react-native';

function pId(uiElePx) {
  const deviceWidthDp = Dimensions.get('window').width;
  // 设计图的宽度，单位px
  const uiWidthPx = 1080;
  return (uiElePx * deviceWidthDp) / uiWidthPx;
}

export { pId };
