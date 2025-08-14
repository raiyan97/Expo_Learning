// import { Redirect } from "expo-router";
// import { StyleSheet, View, } from "react-native";

// export default function Index() {
//   return (
// <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
      
//     >
// <Redirect href={"/Landing"} />
// </View>
//   );
// }


// const styles = StyleSheet.create({

// })

// app/index.tsx
// import { useRouter } from "expo-router";
// import { useEffect } from "react";
// import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// export default function Splash() {
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.replace("/Landing"); // direct landing par le jao
//     }, 2000); // 2 sec delay
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logoText}>MyApp</Text>
//       <ActivityIndicator size="large" color="#007AFF" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   logoText: { fontSize: 28, fontWeight: "bold", marginBottom: 20 }
// });


// app/index.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function AppSplash(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    async function prepare() {
      try {
        // keep native splash visible
        await SplashScreen.preventAutoHideAsync();
        // preload fonts/images you need immediately
        await Promise.all([
          Font.loadAsync({
            // "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
          }),
          // Asset.loadAsync([require("../assets/images/splash-icon.png")]),
        ]);
        // optional tiny delay so transition is smooth
        await new Promise((res) => setTimeout(res, 400));
        if (!mounted) return;
        // auth-check: replace with your real logic
        const token = await AsyncStorage.getItem("userToken");
        // hide native splash before routing
        await SplashScreen.hideAsync();
        // route decision
        if (token) {
          router.replace("/(tabs)");
        } else {
          router.replace("/landing");
        }
      } catch (e) {
        console.warn("Splash error:", e);
        try {
          await SplashScreen.hideAsync();
        } catch {}
        router.replace("/landing");
      }
    }
    prepare();
    return () => {
      mounted = false;
    };
  }, [router]);

  // simple visual (JS fallback while native splash still visible)
  return (
    <View style={styles.center}>
      {/* <Image source={require("../assets/images/splash-icon.png")} style={styles.logo} resizeMode="contain" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff" },
  logo: { width: 200, height: 200 },
});
