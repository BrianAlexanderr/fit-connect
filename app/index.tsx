import React, { useEffect, useRef } from "react";
import { Image, StyleSheet, Animated } from "react-native";
import { router } from "expo-router";

export default function LaunchPage() {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Wait 2 seconds, then start fade out
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300, // fade duration (1 second)
        useNativeDriver: true,
      }).start(() => {
        router.replace('../layout/MainLayout'); // Navigate after fade-out
      });
    }, 2000); // Delay before animation starts

    return () => clearTimeout(timer);
  });

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim, alignItems: "center" }]}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  text: {
    fontSize: 28,
    fontWeight: "700",
    color: "#002D62",
    marginTop: 16,
  },
});


