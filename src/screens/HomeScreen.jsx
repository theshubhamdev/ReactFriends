import { View, Text, FlatList } from "react-native";
import React from "react";
import { FeedPost } from "../components";
import posts from "../../assets/data/posts.json";

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} />}
      />
    </View>
  );
};

export default HomeScreen;
