import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FindEventCardProps {
  img: { uri: string };   // specific shape for React Native ImageSource
  title: string;
  date: string | Date;      // allow both string or Date object
  time?: string;
  participants: number;     // number of participants, not string
  location?: string;        // optional field, e.g. "Jakarta"
  description?: string;     // optional field, e.g. "Join our 5K marathon!"
  onPress?: () => void;
}

export default function FindEventCard({
  img,
  title,
  date,
  time,
  location,
  participants,
  onPress,
}: FindEventCardProps) {
  return (
    <View style={styles.card}>
        <Image source={img} style={styles.image} />

        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.detailContainer}>
                <View style={styles.column}>
                    <View style={styles.detailRow}>
                        <Ionicons name="calendar-outline" size={14} color="#666" />
                        <Text style={styles.detailText}>{String(date)}</Text>
                    </View>

                    {time && (
                    <View style={styles.detailRow}>
                        <Ionicons name="time-outline" size={14} color="#666" />
                        <Text style={styles.detailText}>{time}</Text>
                    </View>
                    )}
                </View>

                <View style={styles.column}>
                    {location && (
                    <View style={styles.detailRow}>
                        <Ionicons name="location-outline" size={14} color="#666" />
                        <Text style={styles.detailText}>{location}</Text>
                    </View>
                    )}

                    <View style={styles.detailRow}>
                        <Ionicons name="people-outline" size={14} color="#666" />
                        <Text style={styles.detailText}>{participants} participants</Text>
                    </View>
                </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Register Now</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginTop: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  column: {
    flex: 1
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 6,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
