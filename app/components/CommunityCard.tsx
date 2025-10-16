import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type CommunityCardProps = {
  name: string;
  description: string;
  members: number;
  img: {uri: string};
  isExclusive?: boolean;
  price?: string;
};

const CommunityCard: React.FC<CommunityCardProps> = ({
  name,
  description,
  members,
  img,
  isExclusive,
  price,
}) => {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{name}</Text>
          <View
            style={[
              styles.badge,
              { backgroundColor: isExclusive ? "#FF8C00" : "#00C853" },
            ]}
          >
            <Text style={styles.badgeText}>
              {isExclusive ? "Premium" : "Free"}
            </Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>

        <Text style={styles.members}>👥 {members} members</Text>
        
        {isExclusive && price ? (
          <Text style={styles.price}>Rp. {price}</Text>
        ) : null}

        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Group</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default CommunityCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 160,
  },
  content: {
    padding: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginRight: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  price: {
    color: "#000000ff",
    fontWeight: "600",
    marginTop: 4,
    fontSize: 20,
    alignSelf: 'flex-end'
  },
  description: {
    color: "#555",
    marginTop: 4,
  },
  members: {
    color: "#777",
    marginTop: 4,
    fontSize: 12,
  },
  button: {
    backgroundColor: "#0055A4",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
