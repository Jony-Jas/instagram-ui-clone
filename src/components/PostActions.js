import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function PostActions() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../img/heart.png")}
          style={{ width: 30, height: 30, marginLeft: 15 }}
        />
        <Image
          source={require("../img/comment.png")}
          style={{ width: 24, height: 24, marginLeft: 15 }}
        />
        <Image
          source={require("../img/share.png")}
          style={{ width: 30, height: 26, marginLeft: 15 }}
        />
      </View>
      <Image
        source={require("../img/save.png")}
        style={{ width: 28, height: 25, marginRight: 10 }}
      />
    </View>
  );
}

export default PostActions;
