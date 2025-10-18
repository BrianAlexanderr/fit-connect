import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Animated, View } from "react-native";
import { router } from "expo-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebaseConfig";
import { useUser } from "@/src/context/userContext";
import { findUser } from "@/src/api/UserAPI";

export default function LaunchPage() {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const auth = getAuth(app);
  const { setUser } = useUser();
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          try {
            const backendUser = await findUser(firebaseUser.uid);

            // Set user context
            setUser({
              id: firebaseUser.uid,
              fullName: backendUser.name,
              email: backendUser.email,
              role: backendUser.role,
              img: backendUser.img,
            });

            // Show logo after fetch
            setShowLogo(true);

            // Wait 1.5 seconds before fade out
            setTimeout(() => {
              Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
              }).start(() => {
                router.replace("/layout/MainLayout");
              });
            }, 2000);

          } catch (err) {
            console.error("Backend fetch failed:", err);
            router.replace("/screens/Login/LoginPage");
          }
        } else {
          // Not logged in
          setShowLogo(true);
          setTimeout(() => {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }).start(() => {
              router.replace("/screens/Login/LoginPage");
            });
          }, 2000);
        }
      });
    };

    checkUser();
  }, []);

  return (
    <View style={styles.container}>
      {showLogo && (
        <Animated.View style={{ opacity: fadeAnim, alignItems: "center" }}>
          <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        </Animated.View>
      )}
    </View>
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
});
