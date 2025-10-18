import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";

interface InputFieldProps extends TextInputProps {
  label: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, error, ...textInputProps }) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? { borderColor: "#d32f2f" } : {}]}
        placeholder={textInputProps.placeholder}
        placeholderTextColor="#999"
        {...textInputProps}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default InputField;

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
  errorText: {
    color: "#d32f2f",
    fontSize: 12,
    marginTop: 4,
    textAlign: "left",
  },
});
