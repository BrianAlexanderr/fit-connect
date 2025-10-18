import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TrainingCardProps{
    img: { uri: string };
    title: string;   
    name: string;
    date: string | Date;      
    time?: string;
    location?: string;        
    description?: string;  
    price: number;   
    onPress?: () => void;
}

const TrainingCard = ({
  img,
  name,
  title,
  description,
  location,
  price,
  onPress,
}: TrainingCardProps) => {
  return (
    <View style={styles.card}>
      {/* Top Section */}
      <View style={styles.topRow}>
        {img ? (
          <Image source={img} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.description}>{name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={14} color="#6B7280" />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.price}>Rp. {price / 1000}k/Month</Text>
      {/* Bottom Section */}
      <View style={styles.bottomRow}>
        
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Book Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrainingCard;

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  topRow: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  description: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  location: {
    fontSize: 12,
    color: "#6B7280",
    marginLeft: 4,
  },
  statusContainer: {
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  statusText: {
    color: "#10B981",
    fontSize: 12,
    fontWeight: "500",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007BFF",
    alignSelf: 'flex-end'
  },
  button: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    alignSelf: "center"
  },
});

