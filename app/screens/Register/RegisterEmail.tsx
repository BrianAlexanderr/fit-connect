import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useRegistration } from "../../../src/context/RegistrationContext";
import { validateEmail, validatePassword } from "@/src/utils/validation";
import InputField from "@/app/components/Inputs/EmailInput";
import ContinueButton from "@/app/components/Button/ContinueButton";

export default function EmailScreen() {
  const router = useRouter();
  const { data, updateData } = useRegistration();
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  const [confirmPassword, setConfirmPassword] = useState(data.confirmPassword);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleContinue = () => {
    let valid = true;

    // Reset errors before checking
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("Must have 6+ chars, one uppercase, and one number");
      valid = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Please confirm your password");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    }

    if (!valid) return;

    updateData({ email, password, confirmPassword });
    router.push("../Register/RegisterInfo");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Account</Text>
          <View style={styles.backButtonPlaceholder} />
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, styles.progressBarActive]} />
          <View style={[styles.progressBar, styles.progressBarActive]} />
          <View style={styles.progressBar} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Set up your account</Text>
          <Text style={styles.subtitle}>Enter your email and create a password</Text>

          {/* Email Input */}
          <InputField 
            label="Email"
            error={emailError}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError("");
            }}
            placeholder="your.email@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
          />

          {/* Password Input */}
          <InputField 
            label="Password"
            error={passwordError}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError("");
            }}
            placeholder="Enter password"
            autoCapitalize="none"
            value={password}
            secureTextEntry={true}
          />

          {/* Confirm Password Input */}
          <InputField 
            label="Confirm Password"
            error={confirmPasswordError}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setConfirmPasswordError("");
            }}
            placeholder="Enter password"
            autoCapitalize="none"
            value={confirmPassword}
            secureTextEntry={true}
          />
        </View>

        {/* Continue Button */}
        <ContinueButton 
          label="Continue"
          onPress={handleContinue}
          disabled={!email.trim() || !password.trim() || !confirmPassword.trim()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
    color: "#999",
    fontWeight: "300",
  },
  headerTitle: {
    fontSize: 16,
    color: "#999",
    fontWeight: "500",
  },
  backButtonPlaceholder: {
    width: 40,
  },
  progressContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 30,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
  },
  progressBarActive: {
    backgroundColor: "#0066cc",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
    marginBottom: 30,
  },
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
  continueButton: {
    backgroundColor: "#0066cc",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonDisabled: {
    backgroundColor: "#ccc",
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
