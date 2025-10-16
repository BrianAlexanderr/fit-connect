import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./button_blue";

interface SessionCardProps {
  title: string;
  date: Date;
  slots: number;
  imageUrl: {uri: string};
  onJoin?: () => void;
}

const SessionCard: React.FC<SessionCardProps> = ({
  title,
  imageUrl,
  date,
  slots,
  onJoin,
}) => {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.image} />

      <View style={styles.infoContainer}>
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
        <Text style={styles.slots}>👥 {slots} slots left</Text>
      </View>

    </View>
  );
};

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
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  date: {
    fontSize: 12,
    color: "#555",
  },
  slots: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 2,
  },
});

export default SessionCard;