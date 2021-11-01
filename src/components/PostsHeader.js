import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import faker from "faker";
import { Entypo } from '@expo/vector-icons';

function PostsHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10
      }}
    >
      <LinearGradient
        colors={["#CA1D7E", "#E35157", "#F2703F"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          borderRadius: 50,
          width: 35,
          height: 35,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: `${faker.image.avatar()}` }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            borderColor: "white",
            borderWidth: 1,
          }}
        />
      </LinearGradient>
      <Text style={{ flex: 1, marginLeft: 7 }}>{faker.fake("{{name.firstName}}")}</Text>
      <Entypo name="dots-three-vertical" size={20} color="black" style={{}} />
    </View>
  );
}

export default PostsHeader;
