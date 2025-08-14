import { StyleSheet, Text, View } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  text: { fontSize: 24, fontWeight: "bold" }
});
