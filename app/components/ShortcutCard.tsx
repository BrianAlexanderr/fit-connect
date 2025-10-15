import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from '../styles/theme';

interface ShortcutCardProps {
  icon: string;
  label: string;
  color?: keyof typeof theme.colors; // background color for icon
  iconColor?: string; // color for icon itself
  onPress?: () => void; // optional handler
}

export default function ShortcutCard({
  icon,
  label,
  color = "primary", // default blue
  iconColor = "#fff", // default white icon
  onPress,
}: ShortcutCardProps) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={[styles.iconWrapper, { backgroundColor: theme.colors[color]}]}>
        <FontAwesome5 name={icon as any} size={22} color={iconColor} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    flex: 1,
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
  },
});
