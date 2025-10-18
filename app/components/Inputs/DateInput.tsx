import { TextInput, View, Text, StyleSheet } from "react-native";

interface DateInputProps {
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

export default function DateInput({ value, onChangeText, error }: DateInputProps) {
  const handleDateChange = (text: string) => {
    let cleaned = text.replace(/\D/g, "");
    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);

    let day = "";
    let month = "";
    let year = "";

    if (cleaned.length >= 1) {
      day = cleaned.slice(0, 2);
      if (parseInt(day) > 31) day = "31";
    }
    if (cleaned.length >= 3) {
      month = cleaned.slice(2, 4);
      if (parseInt(month) > 12) month = "12";
    }
    if (cleaned.length >= 5) {
      year = cleaned.slice(4, 8);
    }

    if (month && day) {
      const m = parseInt(month);
      let maxDay = 31;
      if ([4, 6, 9, 11].includes(m)) maxDay = 30;
      if (m === 2) {
        const y = year ? parseInt(year) : new Date().getFullYear();
        maxDay = (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) ? 29 : 28;
      }
      if (parseInt(day) > maxDay) day = maxDay.toString().padStart(2, "0");
    }

    let formatted = day;
    if (month) formatted += "/" + month;
    if (year) formatted += "/" + year;

    onChangeText(formatted);
  };

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
        placeholderTextColor="#999"
        value={value}
        onChangeText={handleDateChange}
        keyboardType="number-pad"
        maxLength={10}
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
