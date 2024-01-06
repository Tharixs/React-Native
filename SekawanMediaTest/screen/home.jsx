import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, TextInput } from "react-native";
import PostViewModel from "../viewModels/PostViewModel";
import CardComponents from "../components/card-components";
import { globalStyles } from "../style/globalStyle";

const Home = ({ navigation }) => {
  const postViewModel = new PostViewModel();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const filteredPosts = search
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    : posts;

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.search}
        placeholder="Search"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#4682A9" style={{ flex: 1 }} />
      ) : (
        <FlatList
          data={filteredPosts}
          renderItem={({ item }) => (
            <CardComponents
              id={item.id}
              title={item.title}
              onPress={() => navigationHandler(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};
export default Home;
