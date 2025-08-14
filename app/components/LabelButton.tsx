import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IconLabelButtonProps {
 label: string;
 imageSource: any; // Can be require() or { uri: string }
 onPress?: () => void;  
}

const IconLabelButton: React.FC<IconLabelButtonProps> = ({ label, imageSource, onPress }) => {
 return (
 <TouchableOpacity style={styles.container} onPress={onPress}>
 <View style={styles.iconWrapper}>
 <Image source={imageSource} style={styles.icon} />
 </View>
 <Text style={styles.label}>{label}</Text>
 </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 container: {
 flexDirection: "row",
 alignItems: "center",
 alignSelf:"center",
 backgroundColor: "#4CAF50", // Green background
 borderRadius: 50, // Pill shape
 paddingHorizontal: 10,
 paddingVertical: 5,

 },
 iconWrapper: {
 width: 30,
 height: 30,
 borderRadius: 15,
 backgroundColor: "white",
 justifyContent: "center",
 alignItems: "center",
 marginRight: 8,
 },
 icon: {
 width: 18,
 height: 18,
 resizeMode: "contain",
 },
 label: {
 color: "white",
 fontSize: 14,
 fontWeight: "500",
 },
});

export default IconLabelButton;