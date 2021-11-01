import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import PostsHeader from "../components/PostsHeader";
import PostActions from "../components/PostActions";
import faker from "faker";
import PostDescription from "../components/PostDescription";

function PostsScreen() {
  const n = [1, 2, 3, 4, 5, 6, 7];
  const renderPosts = n.map((n) => {
    for (let index = 0; index < 10; index++) {
      return (
        <View key={n}>
          <PostsHeader />
          <Image
            source={{ uri: `${faker.image.image()}` }}
            style={{
              width: "100%",
              height: 350,
              marginVertical: 8,
            }}
          />
          <PostActions />
          <PostDescription />
          <Text
            style={{
              marginLeft: 10,
              color: "grey",
              fontSize: 12,
              marginBottom: 20,
            }}
          >
            {Math.floor(Math.random() * 60) + 1} minutes ago
          </Text>
        </View>
      );
    }
  });
  return <ScrollView>{renderPosts}</ScrollView>;
}

export default PostsScreen;
