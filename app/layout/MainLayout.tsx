import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavBar from "../components/NavBar";
import ActivityScreen from "../screens/Activities/ActivityScreen";
import CommunityScreen from "../screens/Community/CommunityScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

export default function MainLayout() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderScreen = () => {
    switch (activeTab) {
      case "Activity":
        return <ActivityScreen />;
      case "Community":
        return <CommunityScreen />;
      case "Profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}} edges={['bottom']}>
        <View style={styles.container}>
            {renderScreen()}
            <BottomNavBar activeTab={activeTab} onTabPress={setActiveTab} />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
