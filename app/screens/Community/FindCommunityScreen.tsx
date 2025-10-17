// app/community/index.tsx
import React, { useEffect, useRef } from "react";
import { View, Text, Animated, ScrollView, StyleSheet, BackHandler, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";
import CommunityCard from "@/app/components/CommunityCard";
import { Ionicons } from "@expo/vector-icons";
import { useDisplayCommunity } from "@/src/hooks/useGroups";
import { SafeAreaView } from "react-native-safe-area-context";
import {useCommunitySearch} from '../../../src/hooks/useSearch';
import { SearchBar } from '../../components/search_bar';

export default function CommunityPage() {
  const slideAnim = useRef(new Animated.Value(50)).current; // posisi awal bawah
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const {community} = useDisplayCommunity();
  const { query, setQuery, filtered} = useCommunitySearch(community);

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
              <Text style={styles.headerTitle}>Communities</Text>
              <TouchableOpacity style={styles.createBtn}>
                <Ionicons name="add" size={20} color="#fff" />
                <Text style={styles.createText}>Create</Text>
              </TouchableOpacity>
            </View>
        {/* Search */}
        <SearchBar value={query} onChange={setQuery} />
        <View style={{ flex: 1 }}>
          {filtered.length > 0 ? (
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
              <View style={styles.containerView}>
                {filtered.map((com, index) => (
                  <CommunityCard
                    key={index}
                    img={{ uri: com.img }}
                    name={com.name}
                    members={com.members}
                    description={com.description}
                    isExclusive={com.isExclusive}
                    price={com.price}
                  />
                ))}
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

