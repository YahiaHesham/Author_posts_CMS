import React from "react";
import useGetPosts from "./Hooks/useGetPosts";
import { PostCard } from "./Components/PostCard";
function HomePage() {
  const { posts, loading, error } = useGetPosts();
  console.log(posts);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="text-white text-lg mb-4">hello</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts &&
          posts.map((post: any) => (
            <PostCard
              key={post.id}
              title={post.title}
              authorName={post.authorName}
              coverImage={post.coverImage}
            />
          ))}
      </div>
    </div>
  );
}

export default HomePage;
