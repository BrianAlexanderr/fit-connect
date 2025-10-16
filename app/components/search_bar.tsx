import React from "react";
import { View, TextInput, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <View style={styles.searchBox}>
      <Ionicons name="search" size={20} color="#999" />
      <TextInput
        placeholder="Search community..."
        style={styles.searchInput}
        value={value}
        onChangeText={onChange}
      />
      <Ionicons name="options-outline" size={20} color="#007AFF" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchBox: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 15,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    marginLeft: 6,
  },
})