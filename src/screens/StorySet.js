import React from "react";
import { ScrollView } from "react-native";
import StoryItem from "../components/StoryItem";

function StorySet() {
  const n = [1, 2, 3, 4, 5];
  const renderStory = n.map((n) => {
    for (let index = 0; index < 10; index++) {
      return <StoryItem key={n} />;
    }
  });
  return (
    <ScrollView
      horizontal={true}
      style={{
        marginTop: 5,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: "#f4f4f4",
      }}
    >
      {renderStory}
    </ScrollView>
  );
}

export default StorySet;
