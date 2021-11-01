import React from "react";
import { View, Text } from "react-native";
import faker from "faker";

function PostDescription() {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        // borderWidth: 1,
        // borderColor: "black",
        height: 38,
        overflow: "hidden",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>
        {faker.fake("{{name.firstName}}")}{" "}
        <Text style={{ fontWeight: "normal" }}>{faker.lorem.paragraph()}</Text>
      </Text>
    </View>
  );
}

export default PostDescription;
