import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useRegistration } from "../../../src/context/RegistrationContext";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneInput from '../../components/Inputs/PhoneInput';
import DateInput from "@/app/components/Inputs/DateInput";
import ConfirmPopup from "../../components/Popup/ConfirmPopup";
import SuccessPopup from "../../components/Popup/SuccessPopup";
import ContinueButton from "@/app/components/Button/ContinueButton";
import { validatePhone, validateDOB} from "../../../src/utils/validation";
import { registerUser } from "@/src/utils/registrationFirebase";

export default function InfoScreen() {
  const router = useRouter();
  const { data, updateData } = useRegistration();

  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
  const [dateOfBirth, setDateOfBirth] = useState(data.dateOfBirth || "");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState<string | undefined>(undefined);
  const [dobError, setDobError] = useState<string | undefined>(undefined);


  const handleCreateAccount = () => {
    let hasError = false;

    if (!phoneNumber.trim()) {
      setPhoneError("Phone number is required");
      hasError = true;
    } else if (!validatePhone(phoneNumber)) {
      setPhoneError("Phone number must be 10-15 digits");
      hasError = true;
    } else {
      setPhoneError(undefined);
    }

    if (!dateOfBirth.trim()) {
      setDobError("Date of birth is required");
      hasError = true;
    } else if (!validateDOB(dateOfBirth)) {
      setDobError("Date of birth must be in DD/MM/YYYY format");
      hasError = true;
    } else {
      setDobError(undefined);
    }

    if (hasError) return;

    setShowConfirm(true);
  };


  const handleConfirm = async () => {
    setShowConfirm(false);
    try{
      const backendResponse = await registerUser({
        ...data,
        phoneNumber,
        dateOfBirth,
      });

      console.log(backendResponse)

      updateData({ ...data, phoneNumber, dateOfBirth});

      setShowSuccess(true);
    } catch (error){
       console.error("Error saving user data:", error);
      alert("Failed to save registration data. Please try again.");
    }
  };

  const handleGoToLogin = () => {
    setShowSuccess(false);
    router.replace("../Login/LoginPage");
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
          <View style={[styles.progressBar, styles.progressBarActive]} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Additional Information</Text>
          <Text style={styles.subtitle}>Help us reach you when needed</Text>

          {/* Phone Number Input */}
          <PhoneInput 
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            error={phoneError}
          />

          {/* Date of Birth Input */}
          <DateInput 
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            error={dobError}
          />
        </View>

        {/* Create Account Button */}
        <ContinueButton 
          label="Create Account"
          onPress={handleCreateAccount}
          disabled={!phoneNumber.trim() || !dateOfBirth.trim()}
        />
      </ScrollView>

      {/* Popups */}
      <ConfirmPopup visible={showConfirm} onConfirm={handleConfirm} onCancel={() => setShowConfirm(false)} />
      <SuccessPopup visible={showSuccess} onGoToLogin={handleGoToLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, backgroundColor: "#fff" 
  },
  scrollContent: { 
    paddingHorizontal: 20, paddingVertical: 20, flexGrow: 1 
  },
  header: { 
    flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: "#e0e0e0" },
  backButton: { 
    padding: 8 
  },
  backButtonText: { 
    fontSize: 24, color: "#999", fontWeight: "300" 
  },
  headerTitle: { 
    fontSize: 16, color: "#999", fontWeight: "500" 
  },
  backButtonPlaceholder: { 
    width: 40 
  },
  progressContainer: { 
    flexDirection: "row", gap: 8, marginBottom: 30 
  },
  progressBar: { 
    flex: 1, height: 4, backgroundColor: "#e0e0e0", borderRadius: 2 
  },
  progressBarActive: { 
    backgroundColor: "#0066cc" 
  },
  content: { 
    flex: 1 },
  title: { 
    fontSize: 28, fontWeight: "700", color: "#000", marginBottom: 8 
  },
  subtitle: { 
    fontSize: 14, color: "#999", marginBottom: 30 
  },
  inputGroup: { 
    marginBottom: 20 },
  label: { 
    fontSize: 16, fontWeight: "600", color: "#000", marginBottom: 8 
  },
  input: { 
    borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 14, backgroundColor: "#f5f5f5" 
  },
  errorText: { 
    color: "#d32f2f", fontSize: 12, marginTop: -10, marginBottom: 15 
  },
  continueButton: { 
    backgroundColor: "#0066cc", borderRadius: 8, paddingVertical: 14, alignItems: "center", marginTop: 20 
  },
  continueButtonDisabled: { 
    backgroundColor: "#ccc" 
  },
  continueButtonText: { 
    fontSize: 16, fontWeight: "600", color: "#fff" 
  },
});
