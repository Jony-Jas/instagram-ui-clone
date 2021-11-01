import React from "react";
import { View, Image, Text } from "react-native";
import faker from "faker";

import ProfileImage from "./ProfileImage";

function StoryItem() {
  return (
    <>
      <View
        style={{
          alignItems: "center",
          width: 90,
          height: 100,
          marginLeft: 0,
        }}
      >
        <ProfileImage />
        <Text style={{ textAlign: "center", marginTop: 1, fontSize:13 }}>
          {faker.fake("{{name.firstName}}")}
        </Text>
      </View>
    </>
  );
}

export default StoryItem;
