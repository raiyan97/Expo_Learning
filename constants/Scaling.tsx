import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

const LANDSCAPE = "landscape";
const PORTRAIT = "portrait";

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const sliderWidth = width - 20;
const itemWidth = width - 20;

const isIPhoneX = (): boolean =>
  Platform.OS === "ios" && !Platform.isPad && !Platform.isTV
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

const StatusBarHeight: number = Platform.select({
  ios: isIPhoneX() ? 44 : 44,
  android: 44, // You can replace with StatusBar.currentHeight ?? 44
  default: 0,
}) as number;

const StatusBarHeightSecond: number = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight ?? 0,
  default: 0,
}) as number;

const scale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

const moderateScaleVertical = (size: number, factor: number = 0.5): number =>
  size + (verticalScale(size) - size) * factor;

const textScale = (percent: number): number => {
  const screenHeight = Dimensions.get("window").height;
  const ratio = screenHeight / Dimensions.get("window").width;

  const deviceHeight =
    375
      ? screenHeight * (ratio > 1.8 ? 0.14 : 0.15)
      : Platform.OS === "android"
      ? screenHeight - (StatusBar.currentHeight ?? 0)
      : screenHeight;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};

export {
    height, itemWidth, moderateScale,
    moderateScaleVertical, scale, sliderWidth, StatusBarHeight,
    StatusBarHeightSecond, textScale, verticalScale, width
};

