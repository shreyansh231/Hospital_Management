import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react"
import { StyleSheet } from "react-native";
import SignInWithOAuth from "../Components/SignInWithOAuth";
export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require('./../../assets/images/landing_page.png')}
        style={{
          display: "flex",
          height: 400,
          width: 300,
          objectFit: "contain",
        }}
      />
      <View
        style={{
          backgroundColor:'#0fff',
          padding: 25,
          alignItems: "center",
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
        }}
      >
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Book Appointment Effortlessely and manager your health{" "}
        </Text>
       <SignInWithOAuth/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
