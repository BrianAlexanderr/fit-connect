import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface EventCardProps {
  image: { uri: string };   // specific shape for React Native ImageSource
  title: string;
  date: Date;      // allow both string or Date object
  participants: string;     // number of participants, not string
  location?: string;        // optional field, e.g. "Jakarta"
  description?: string;     // optional field, e.g. "Join our 5K marathon!"
}


export default function EventCard({ image, title, date, participants }: EventCardProps) {  
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text>
          {typeof date === "string"
            ? new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
        </Text>
        <Text style={styles.participants}>👥 {participants} participants</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.join}>Join</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.01,
    shadowRadius: 2,
    elevation: 2,
    height: 140
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#555",
  },
  participants: {
    fontSize: 12,
    color: "#777",
  },
  join: {
    marginRight: 8,
    marginBottom: 80,
    color: "#0057D9",
    fontWeight: "600",
    fontSize: 18
  },
});
