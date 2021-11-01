import * as React from "react";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/IndexScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          headerTitle: () => {
            return (
              <View
                style={{
                  borderWidth: 0,
                }}
              >
                <Image
                  source={require("./src/img/instagram.png")}
                  style={{ width: 115, height: 40 }}
                />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottom: 1,
                }}
              >
                <Image
                  source={require("./src/img/create.png")}
                  style={{ width: 28, height: 28, marginRight: 25 }}
                />
                <Image
                  source={require("./src/img/messenger.png")}
                  style={{ width: 28, height: 28, marginRight: 15 }}
                />
              </View>
            );
          },
          headerTransparent: false,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: "white",
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={IndexScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("./src/img/home.png")}
                  style={{ width: 28, height: 28}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={IndexScreen}
          options={{
            tabBarIcon: () => {
              return <Ionicons name="search" size={28} color="black" />;
            },
          }}
        />
        <Tab.Screen
          name="Reels"
          component={IndexScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("./src/img/reels.png")}
                  style={{ width: 28, height: 28}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Activity"
          component={IndexScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("./src/img/heart.png")}
                  style={{ width: 28, height: 28 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={IndexScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("./src/img/profile.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
