/**
 * 调用设备宽高api
 * 调用屏幕分辨率pxapi
 */
import project from 'config/project.config';

import {
  Dimensions, PixelRatio, Platform, StatusBar,
} from 'react-native';

const { dimension } = project;

export const { width } = Dimensions.get('window');
export const { height } = Dimensions.get('window');
export const uiWidth = dimension.width;
export const uiHeight = dimension.height;

// 计算元素适配宽度
export const UiWidth = (e) => {
  // 元素的宽度（dp） = 设计稿元素宽度（px）* 屏幕的总宽度（dp） / 设计稿总宽度（px）
  const result = (e * width) / uiWidth;
  return result;
};
// 计算元素适配高度
export const UiHeight = (e) => {
  // 元素的高度（dp） = 设计稿元素高度（px）* 屏幕的总高度（dp） / 设计稿总高度（px）
  const result = (e * height) / uiHeight;
  return result;
};

// 判断当前设备的dp等级
export const dbLevel = PixelRatio.get();
// 字体大小缩放比例
export const fontScale = PixelRatio.getFontScale();

// px转dp，根据字体缩放比例
export const PxToDp = (e) => {
  // 字体大小dp=字体像素px*像素密度dp/字体缩放比例
  const result = e * dbLevel;
  return result;
};

// dp转px
export const DpToPx = (e) => {
  // 元素db，直接调用内置方法返回px
  const result = PixelRatio.getPixelSizeForLayoutSize(e);
  return result;
};
// pt转px
export const PtToPx = (e) => {
  // pt = px * (72 / 160*dbLevel)
  // px=pt*(72/160*dbLevel)
  const result = e * (72 / (160 * dbLevel));
  return result;
};
// pt转dp
export const PtToDp = (e) => {
  const result = PxToDp(PtToPx(e));
  return result;
};
