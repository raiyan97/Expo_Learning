import { moderateScale, scale } from '@/constants/Scaling';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

type HeadComponentProps = {
  label?: string;
  color?: string;
  image?: any;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};

export default function HeadComponent({
  label,
  color,
  image,
  containerStyle,
  textStyle,
  imageStyle,
}: HeadComponentProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.text, { color }, textStyle]}>{label}</Text>}
      {image && <Image source={image} style={[styles.img, imageStyle]} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
//  flex:1,
 paddingHorizontal:moderateScale(20),
marginBottom:moderateScale(30),
 flexDirection: 'column', 
    alignItems: 'flex-start',
justifyContent:"center",


  },
  text: {
    fontSize: scale(28),
    // color: Colors.PRIMARY,
  },
  img: {
    // width: scale(24),
    // height: scale(24),
    // marginLeft: 8,
    // resizeMode: 'contain',
  },
});
