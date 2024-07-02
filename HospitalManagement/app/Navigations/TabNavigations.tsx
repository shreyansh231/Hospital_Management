import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Appointment from "../Screens/Appointment";
import Profile from "../Screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
const Tab = createBottomTabNavigator();
export default function TabNavigations() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home}  
      options={{
        tabBarIcon:({color,size})=>(
          <FontAwesome name="home" size={24} color={color} />
        )
      }}/>
        <Tab.Screen name="Appr" component={Appointment} 
        options={{
          tabBarIcon:({color,size})=>(
            <AntDesign name="calendar" size={24} color={color} />
          )
        }}
        />
        <Tab.Screen name="PRR" component={Profile} 
         options={{
          tabBarIcon:({color,size})=>(
            <Feather name="user" size={24} color={color} />
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
