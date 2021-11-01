import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import faker from "faker";

function ProfileImage() {
  return (
    <>
      <LinearGradient
        colors={["#CA1D7E", "#E35157", "#F2703F"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          borderRadius: 50,
          width: 75,
          height: 75,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: `${faker.image.avatar()}` }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            borderColor: "white",
            borderWidth: 3,
          }}
        />
      </LinearGradient>
    </>
  );
}

export default ProfileImage;
