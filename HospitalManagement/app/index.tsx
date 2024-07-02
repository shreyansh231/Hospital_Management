import App from "@/App";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Login from "./Screens/Login";
import Constants from "expo-constants";
import SignInWithOAuth from "./Components/SignInWithOAuth";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigations from "./Navigations/TabNavigations";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { StatusBar } from "expo-status-bar";


enableScreens();

export default function Page() {

  return (
    <ClerkProvider
      publishableKey={"pk_test_dGlkeS1qYXdmaXNoLTExLmNsZXJrLmFjY291bnRzLmRldiQ"}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <SignedIn>
          <TabNavigations />
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
function useFonts(arg0: { 'Inter-Black': any; }): [any, any] {
  throw new Error("Function not implemented.");
}

