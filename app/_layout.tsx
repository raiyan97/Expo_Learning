import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";


export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
   const [fontsLoaded] = useFonts({
  Nunito: require("../assets/fonts/Nunito-Black.ttf"),
  "Nunito-SemiBoldItalic": require("../assets/fonts/Nunito-MediumItalic.ttf"),
});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
    // Simulate splash delay


  if (isLoading) {
    return <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" /></Stack>;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
