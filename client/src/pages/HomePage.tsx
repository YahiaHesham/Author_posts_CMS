import React from "react";
import useGetPosts from "../Hooks/useGetPosts";
import { PostCard } from "../Components/PostCard";

function HomePage() {
  const { posts, loading, error } = useGetPosts();

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200">
        <div className="text-2xl text-gray-800">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-red-200">
        <div className="text-2xl text-gray-800">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200">
      {/* Title Bar with Gradient Splash Effect */}
      <div className="w-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 text-white py-6 px-6 rounded-b-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center">Latest Posts</h1>
        <p className="text-xl text-center mt-2">
          Browse through our latest blog posts
        </p>
      </div>

      {/* Post Grid Section */}
      <div className="w-full max-w-7xl px-4 py-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts && posts.length > 0 ? (
            posts.map((post: any) => (
              <PostCard
                postId={post.id}
                key={post.id}
                title={post.title}
                authorName={post.authorName}
                coverImage={post.coverImage}
                content={post.content}
                authorBio={post.authorBio}
                authorImage={post.authorImage}
                publishDate={post.publishDate}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-lg text-gray-600">
              No posts available at the moment.
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-blue-700 text-white py-4 mt-8  absolute left-0 right-0 bottom-0">
        <div className="flex justify-center items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FAVblogs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
