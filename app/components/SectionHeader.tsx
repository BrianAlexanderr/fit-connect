import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface SectionHeaderProps {
  title: string;
  onPress?: () => void;
}

export default function SectionHeader({ title, onPress }: SectionHeaderProps) {
  return (
    <View style={[styles.container, {marginTop: 30, marginBottom: 10}]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>See All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  link: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0057D9",
  },
});
