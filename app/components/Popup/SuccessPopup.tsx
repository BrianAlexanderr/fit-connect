import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SuccessPopupProps {
  visible: boolean;
  onGoToLogin: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ visible, onGoToLogin }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Ionicons name="checkmark-circle-outline" size={70} color="#4CAF50" style={{ marginBottom: 15 }} />
          <Text style={styles.text}>Registration Successful!</Text>

          <TouchableOpacity style={styles.button} onPress={onGoToLogin}>
            <Text style={styles.btnText}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    width: "75%",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#E6F9EE",
    borderRadius: 50,
    padding: 15,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SuccessPopup;
