import Colors from "@/constants/Colors";
import imagePath from "@/constants/imagePath";
import { height, scale } from "@/constants/Scaling";
import { SafeAreaView, StyleSheet, View } from "react-native";
import HeadComponent from "../components/Header";
import IconLabelButton from "../components/LabelButton";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headConatin}>
      <HeadComponent
        label="Product"
        color={Colors.WHITE}
        containerStyle={{ backgroundColor: Colors.PRIMARY, }}
        textStyle={{ fontSize:scale(30), fontWeight: "bold" }}
        imageStyle={{ tintColor: Colors.WHITE,backgroundColor:Colors.ACCENTRED }}
      />
       <HeadComponent
       color={Colors.WHITE}
        image={imagePath.seacrh}
         containerStyle={{left:130 }}
        imageStyle={{ tintColor: Colors.WHITE }}

      />
      <HeadComponent
        color={Colors.WHITE}
        image={imagePath.bucket}
        containerStyle={{ left:100 }}
        imageStyle={{ tintColor: Colors.WHITE, }}
      />
     
      </View>

      <View style={styles.itemConatiner}>
        <IconLabelButton
         label="Chicken"
         imageSource={imagePath.bucket}
         onPress={()=>console.log("chickenPress")}
        
        />
         <IconLabelButton
         label="Chicken"
         imageSource={imagePath.bucket}
         onPress={()=>console.log("chickenPress")}
        
        />
         <IconLabelButton
         label="Chicken"
         imageSource={imagePath.bucket}
         onPress={()=>console.log("chickenPress")}
        
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
flex:1,

 
  },
  headConatin:{
height:height/8,
    flexDirection:"row",
    backgroundColor:Colors.PRIMARY
  },
  itemConatiner:{
    flexDirection:"row",
    justifyContent:"space-around"
  }

});
