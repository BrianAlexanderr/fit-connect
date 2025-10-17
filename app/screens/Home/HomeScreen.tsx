import React from "react";
import {router} from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ShortcutCard from "../../components/ShortcutCard";
import EventCard from "../../components/EventCard";
import SessionCard from "../../components/SessionCard";
import SectionHeader from "../../components/SectionHeader";
import { useUpcomingEvents } from "../../../src/hooks/useEvents";
import { useTrainings } from "../../../src/hooks/useTrainings";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { events } = useUpcomingEvents();
  const { trainings } = useTrainings();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}} edges={['bottom']}>
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.greeting}>
            Hello, <Text style={styles.username}>User</Text>
          </Text>

          {/* Shortcut Section */}
          <View style={[styles.card, { marginTop: 20 }]}>
            <Text style={styles.sectionTitle}>What to do?</Text>
            <View style={styles.shortcuts}>
              <ShortcutCard icon="users" label="Community" color="primary" onPress={() => router.push("../screens/Community/FindCommunityScreen")}/>
              <ShortcutCard icon="calendar" label="Events" color="secondary" onPress={() => router.push("../screens/Events/FindEventScreen")}/>
              <ShortcutCard icon="dumbbell" label="Training" color="tertiary" />
            </View>
          </View>

          {/* Upcoming Events */}
          <SectionHeader title="Upcoming Events" />
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={{ uri: event.img }}
              title={event.title}
              date={event.startDate}
              participants="10 participants"
            />
          ))}

          {/* Training Session */}
          <SectionHeader title="Available Session" />
          {trainings.map((training, index) => (
            <SessionCard
              key={index}
              imageUrl={{ uri: training.img }}
              title={training.title}
              slots={training.slots}
              date={training.date}
            />
          ))}
        </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 60,
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

