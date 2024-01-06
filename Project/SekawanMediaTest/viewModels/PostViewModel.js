import axios from "axios";
import PostModel from "../models/PostModel";

class PostViewModel {
  async fetchPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = response.data;
      const posts = [];

      for (const post of postsData) {
        const userResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        const user = userResponse.data;

        posts.push(
          new PostModel(post.userId, post.id, post.title, post.body, user.name)
        );
      }
      console.log("Posts:", posts[0]);
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
}

export default PostViewModel;
