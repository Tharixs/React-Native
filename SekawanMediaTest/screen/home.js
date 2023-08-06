import React, { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import PostViewModel from "../viewmodels/PostViewModel";
import CardComponents from "../components/card-components";
import { globalStyles } from "../style/globalStyle";

const Home = ({ navigation }) => {
  const postViewModel = new PostViewModel();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await postViewModel.fetchPosts();
        setPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const navigationHandler = (post) => {
    navigation.navigate("Detail", { post });
  };

  return (
    <View style={globalStyles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#4682A9" style={{ flex: 1 }} />
      ) : (
        <ScrollView>
          {posts.map((post) => (
            <CardComponents
              key={post.id}
              title={post.title}
              userName={post.userName}
              onPress={() => navigationHandler(post)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
export default Home;
