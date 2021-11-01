import React from "react";
import { ScrollView } from "react-native";
import StorySet from "./StorySet";
import PostsScreen from "./PostsScreen";

function IndexScreen() {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <StorySet />
      
    </ScrollView>
  );
}

export default IndexScreen;
