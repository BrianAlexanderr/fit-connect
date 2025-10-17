import React, { useEffect, useRef } from "react";
import { View, Text, Animated, ScrollView, StyleSheet, BackHandler} from "react-native";
import { useRouter } from "expo-router";
import FindEventCard from "@/app/components/FindEventCard";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {useEventSearch} from '../../../src/hooks/useSearch';
import { SearchBar } from '../../components/search_bar';
import { useAllEvents }  from "@/src/hooks/useEvents";
import moment from 'moment';
import CalendarButton from "@/app/components/Calendar_Button";
import { useDateFilter } from "../../../src/hooks/useDateFilter";

export default function FindEventPage() {
  const slideAnim = useRef(new Animated.Value(50)).current; // posisi awal bawah
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const {events} = useAllEvents();
  const { query, setQuery, filtered} = useEventSearch(events);
  const { selectedDate, handleDateChange, filteredByDate } = useDateFilter(filtered);

  // Slide in saat mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  });

  // Slide out saat back button / exit
  const handleExit = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 50, // geser ke bawah
        duration: 30,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 30,
        useNativeDriver: true,
      }),
    ]).start(() => {
      router.back(); // baru pindah halaman
    });
  };

  // Optional: handle hardware back button di Android
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        handleExit();
        return true; // cegah default
      }
    );
    return () => backHandler.remove();
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: slideAnim }],
          opacity: opacityAnim,
        },
      ]}
    >
      <SafeAreaView style={{ flex: 1}} edges={['bottom']}>
        {/* Header */}
        <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>Events</Text>
            <CalendarButton label="Calendar" onDateSelected={handleDateChange} />
        </View>
        {/* Selected date info */}
        {selectedDate && (
          <Text style={styles.dateText}>
            Showing events on {moment(selectedDate).format("DD MMM YYYY")}
          </Text>
        )}
        {/* Search */}
        <SearchBar value={query} onChange={setQuery} />
        <View style={{ flex: 1 }}>
          {filteredByDate.length > 0 ? (
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
              <View style={styles.containerView}>
                {filteredByDate.map((eve, index) => {
                    const formattedDate = moment.utc(eve.startDate).format('DD MMM YYYY');
                    const formattedTime = moment.utc(eve.startDate).format('h:mm A');

                    return (
                        <FindEventCard
                        key={index}
                        img={{ uri: eve.img }}
                        title={eve.title}
                        date={formattedDate}
                        time={formattedTime}
                        location={eve.location}
                        participants={eve.participantCount}
                        onPress={() => {}}
                        />
                    );
                    })}
              </View>
            </ScrollView>
          ) : (
            <View style={styles.notFoundContainer}>
              <Ionicons name="search-outline" size={80} color="#ccc" />
              <Text style={styles.notFoundText}>Event not found</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FA",
    paddingHorizontal: 16,
    paddingTop: 70,
  },
  containerView: {
    flex: 1,
    backgroundColor: "#F6F8FA",
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginStart: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  dateText: {
    marginVertical: 10,
    marginLeft: 12,
    fontSize: 14,
    color: "#555",
  },
  createBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  createText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 4,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFoundText: {
    fontSize: 18,
    color: "#999",
    fontWeight: "600",
  },
});
