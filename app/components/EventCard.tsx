import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 10,
    height: 140
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
    alignSelf: "center"
  },
  info: {
    flex: 1
  },
  title: {
    fontSize: 17,
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
});
