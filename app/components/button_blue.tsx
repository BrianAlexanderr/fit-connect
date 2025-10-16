import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface PrimaryButtonProps {
  label: string;
  onPress?: () => void;
  color?: string; // optional override for background color
  style?: ViewStyle; // optional additional styles
  textStyle?: TextStyle; // optional custom text style
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  color = "#007AFF",
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    bottom: 15,
    right: 15
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
});
