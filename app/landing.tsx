import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function Landing() {
  const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <TouchableOpacity style={styles.btn} onPress={() => router.push("/(auth)/signin")}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

 
 
  title: { fontSize:28,
     fontFamily:"Nunito", 
     fontWeight:700,
     marginBottom: 20 },
 
 
 
  btn: { backgroundColor: "#007BFF", padding: 12, borderRadius: 8 },
  btnText: { color: "#fff", fontSize: 16 }
});
