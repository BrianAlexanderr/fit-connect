import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ContinueButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function ContinueButton({ label, onPress, disabled }: ContinueButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.continueButton, disabled ? styles.continueButtonDisabled : {}]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.continueButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  continueButton: { backgroundColor: "#0066cc", borderRadius: 8, paddingVertical: 14, alignItems: "center", marginTop: 20 },
  continueButtonDisabled: { backgroundColor: "#ccc" },
  continueButtonText: { fontSize: 16, fontWeight: "600", color: "#fff" },
});

