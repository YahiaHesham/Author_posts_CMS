import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Box from "@mui/material/Box";

interface PostDetailsPageProps {
  authorName?: string;
  coverImage?: string;
  title?: string;
  content?: string;
  publishDate?: string;
  authorBio?: string;
  authorImage?: string;
}

export const PostDetailsPage: React.FC<PostDetailsPageProps> = () => {
  const { postId } = useParams<{ postId: string }>();
  const location = useLocation();
  const [post, setPost] = useState<PostDetailsPageProps | null>(
    location.state as PostDetailsPageProps
  );

  if (!post) {
    return <div>Loading post details...</div>;
  }

  return (
    <div className="flex justify-start min-h-screen items-start bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200">
      <div className="flex flex-col mt-10 justify-start items-start w-full mx-auto">
        {/* Cover Image */}
        <div
          className="w-full h-96 rounded-[20px] bg-cover bg-center shadow-lg transform transition-all hover:scale-105"
          style={{
            backgroundImage: `url(${post.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Title Section */}
        <div className="flex flex-col justify-center items-center mt-2 w-full px-4">
          <Box
            component="section"
            sx={{
              p: 2,
            }}
            className="text-3xl font-bold text-blue-700 text-center"
          >
            {post.title}
            <p className="text-lg text-gray-700 mt-2 font-medium text-right">
              by {post.authorName}
            </p>
          </Box>
        </div>

        {/* Content Section with Author Bio and Image inline */}
        <div className="flex justify-center items-center mt-8 w-full px-4 space-x-4 mb-8">
          {/* Post Content */}
          <Box
            component="section"
            sx={{
              p: 4,
              border: "2px solid #3B82F6", // A solid blue border
              borderRadius: "16px",
              backgroundColor: "white", // White background for contrast
              width: "100%",
              maxWidth: "800px", // Constrain the width of the content box
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for elevation
            }}
            className="text-base text-gray-700 leading-relaxed text-justify"
          >
            {post.content}

            {/* Published Date */}
            {post.publishDate && (
              <p className="text-sm text-gray-500 italic text-right mt-4">
                Published on {new Date(post.publishDate).toLocaleDateString()}
              </p>
            )}
          </Box>

          {/* Author Box */}
          <Box
            component="section"
            sx={{
              p: 3,
              border: "2px solid #3B82F6", // A solid blue border
              borderRadius: "16px",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center", // Aligns the items inline (image + text)
              marginRight: "20px", // Space between author box and content
              width: 1 / 4,
              justify: "center",
            }}
            className="flex items-center"
          >
            {/* Author Image */}
            {post.authorImage && (
              <img
                src={post.authorImage}
                alt={post.authorName}
                className="w-16 h-16 rounded-full mr-4" // Round image and spacing
              />
            )}
            {/* Author Name and Bio */}
            <div>
              <p className="text-lg text-gray-700">{post.authorName}</p>
              <p className="text-sm text-gray-500">{post.authorBio}</p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};
