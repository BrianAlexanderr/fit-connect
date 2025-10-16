import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BottomNavBarProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => onTabPress("Home")}>
        <Ionicons
          name="home-outline"
          size={24}
          color={activeTab === "Home" ? "#007AFF" : "#9CA3AF"}
        />
        <Text
          style={[
            styles.label,
            { color: activeTab === "Home" ? "#007AFF" : "#9CA3AF" },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => onTabPress("Activity")}>
        <Ionicons
          name="time-outline"
          size={24}
          color={activeTab === "Activity" ? "#007AFF" : "#9CA3AF"}
        />
        <Text
          style={[
            styles.label,
            { color: activeTab === "Activity" ? "#007AFF" : "#9CA3AF" },
          ]}
        >
          Activity
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => onTabPress("Community")}>
        <Ionicons
          name="chatbubble-outline"
          size={24}
          color={activeTab === "Community" ? "#007AFF" : "#9CA3AF"}
        />
        <Text
          style={[
            styles.label,
            { color: activeTab === "Community" ? "#007AFF" : "#9CA3AF" },
          ]}
        >
          Community
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => onTabPress("Profile")}>
        <Ionicons
          name="person-outline"
          size={24}
          color={activeTab === "Profile" ? "#007AFF" : "#9CA3AF"}
        />
        <Text
          style={[
            styles.label,
            { color: activeTab === "Profile" ? "#007AFF" : "#9CA3AF" },
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: "500",
  },
});

export default BottomNavBar;
