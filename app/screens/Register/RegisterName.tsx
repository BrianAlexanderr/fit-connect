import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { useRegistration } from "../../../src/context/RegistrationContext";
import FirstNameInput from "@/app/components/Inputs/FirstNameInput";
import LastNameInput from "@/app/components/Inputs/LastNameInput";
import ContinueButton from "@/app/components/Button/ContinueButton";

export default function NameScreen() {
  const router = useRouter()
  const { data, updateData } = useRegistration()
  const [firstName, setFirstName] = useState(data.firstName)
  const [lastName, setLastName] = useState(data.lastName)

  const handleContinue = () => {
    if (firstName.trim() && lastName.trim()) {
      updateData({ firstName, lastName })
      router.push("../Register/RegisterEmail")
    }
  }

  const handleBack = () => {
    router.back()
  }

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
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}> Whats your name?</Text>
          <Text style={styles.subtitle}>Lets get to know you better</Text>

          {/* First Name Input */}
          <FirstNameInput
            value={firstName}
            onChangeText={setFirstName}
          />

          {/* Last Name Input */}
          <LastNameInput 
            value={lastName}
            onChangeText={setLastName}
          />
          
        </View>

        {/* Continue Button */}
        <ContinueButton 
          label="Continue"
          onPress={handleContinue}
          disabled={!firstName.trim() || !lastName.trim()}
        />
      </ScrollView>
    </SafeAreaView>
  )
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
})
