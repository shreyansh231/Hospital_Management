import { useAuth } from "@clerk/clerk-expo";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../Components/Home/Header";
import Search from "../Components/Home/Search";
import Slider from "../Components/Home/Slider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Categories from './../Components/Home/Categories'
const Home = () => {
  const { isLoaded, signOut } = useAuth();
  return (
    <GestureHandlerRootView style={{ marginTop: 25, padding: 20 }}>
      <Header />
      <Search setSearchText={(value) => console.log(value)} />

      <Slider />
      <Categories/>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
