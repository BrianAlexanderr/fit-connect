import { TextInput, View, Text, StyleSheet } from "react-native";

interface InputProps{
    value: string;
    onChangeText: (text: string) => void;
}

export default function FirstNameInput ({value, onChangeText }: InputProps){
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Jone"
              placeholderTextColor="#999"
              value={value}
              onChangeText={onChangeText}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    backgroundColor: "#f5f5f5",
    color: "#000",
  },
})