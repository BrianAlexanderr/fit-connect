import React from "react";
import { ScrollView, StyleSheet, Text, View} from "react-native";
import ShortcutCard from "../components/ShortcutCard";
import EventCard from "../components/EventCard";
import SectionHeader from "../components/SectionHeader";
import { useUpcomingEvents } from "../hooks/useEvents";

export default function HomeScreen() {

  const { events, loading } = useUpcomingEvents();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>
        Hello, <Text style={styles.username}>User</Text>
      </Text>

      {/* Shortcut Section */}
      <View style={[styles.card, {marginTop: 20}]}>
        <Text style={styles.sectionTitle}>What to do?</Text>
        <View style={styles.shortcuts}>
          <ShortcutCard icon="users" label="Community" color="primary"/>
          <ShortcutCard icon="calendar" label="Events" color="secondary"/>
          <ShortcutCard icon="dumbbell" label="Training" color="tertiary"/>
        </View>
      </View>

      {/* Upcoming Events */}
      <SectionHeader title="Upcoming Events" />
      {events.map((event, index) => (
        <EventCard
          key={index}
          image={{uri: event.img}}
          title={event.title}
          date={event.startDate}
          participants="10 participants"
          />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 80
  },
  greeting: {
    fontSize: 26,
    marginLeft: 20,
    fontWeight: "700",
    marginVertical: 20,
  },
  username: {
    color: "#0057D9",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  shortcuts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
