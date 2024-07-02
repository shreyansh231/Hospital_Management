import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
type SearchProps = {
  setSearchText: (text: string) => void;
};
export default function Search({ setSearchText }: SearchProps) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          borderWidth: 0.6,
          borderColor: "c2c3c4",
          padding: 8,
          borderRadius: 8,
        }}
      >
        <EvilIcons name="search" size={24} color="black" />
        <TextInput
          placeholder="search"
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
          style={{ width: "100%" }}
        />
      </View>
    </View>
  );
}
