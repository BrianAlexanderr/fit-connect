import { TextInput, View, Text, StyleSheet } from "react-native";

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

export default function PhoneInput({ value, onChangeText, error }: PhoneInputProps) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 081234567890"
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        keyboardType="phone-pad"
      />
      {error && ( 
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "600", color: "#000", marginBottom: 8 },
  input: { borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 14, backgroundColor: "#f5f5f5" },
  errorText: { color: "#d32f2f", fontSize: 12, marginTop: 4 },
});