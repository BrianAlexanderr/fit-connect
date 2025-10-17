// app/components/Calendar_Button.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, Text, Modal, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";

interface CalendarButtonProps {
  label?: string;
  onDateSelected?: (date: Date | null) => void;
}

export default function CalendarButton({
  label = "Pick Date",
  onDateSelected,
}: CalendarButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleDayPress = (day: any) => {
    setSelected(day.dateString);
    setIsVisible(false);
    onDateSelected?.(new Date(day.dateString));
  };

  const handleReset = () => {
    setSelected(null);
    onDateSelected?.(null); // Notify parent that date is reset
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={selected ? handleReset : () => setIsVisible(true)}
      >
        <Ionicons
          name="calendar-outline"
          size={18}
          color="#fff"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.label}>
          {selected ? "Reset" : label}
        </Text>
      </TouchableOpacity>

      <Modal visible={isVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={
                selected
                  ? { [selected]: { selected: true, selectedColor: "#007AFF" } }
                  : {}
              }
              theme={{
                todayTextColor: "#007AFF",
                selectedDayBackgroundColor: "#007AFF",
                arrowColor: "#007AFF",
              }}
            />
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  label: {
    color: "#fff",
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  closeButton: {
    marginTop: 12,
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
  },
  closeText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});






