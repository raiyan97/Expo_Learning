import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)")}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={styles.link}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  btn: { backgroundColor: "#007BFF", padding: 12, borderRadius: 8 },
  btnText: { color: "#fff", fontSize: 16 },
  link: { marginTop: 10, color: "#007BFF" }
});
