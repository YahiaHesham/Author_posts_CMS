import axios from "axios";
import { useEffect, useState } from "react";

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = "/api/posts/viewposts"; // Ensure this matches your proxy configuration
    const getPosts = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return { posts, loading, error };
};

export default useGetPosts;
