import React from "react";

interface BlogCardProps {
  title: string;
  image: string;
  content: string;
  author: string;
  designation: string;
  authorImage: string;
}

const BlogCard = ({
  title,
  image,
  content,
  author,
  designation,
  authorImage,
}: BlogCardProps) => {
  return (
    <div className="m-10 max-w-[400px] border rounded-3xl text-black dark:text-white dark:border-gray-700 dark:bg-gray-800">
      <div className="text-5xl">
        <img
          src={image}
          alt="image"
          className="rounded-t-3xl w-[100%] h-[200px]"
        />
      </div>
      <div className="p-4">
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-lg font-medium text-left py-8">{content}</div>
        <div className="py-2 flex items-center">
          <img
            src={authorImage}
            alt="image"
            className="w-10 h-10 rounded-full"
          />
          <div className="ps-2">
            <div className="text-xl font-bold">{author}</div>
            <div className="text-lg font-medium text-left -mt-2">
              {designation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
