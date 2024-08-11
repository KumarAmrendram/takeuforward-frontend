import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      image:
        "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quae.",
      author: "John Doe",
      designation: "CEO",
      authorImage:
        "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      image:
        "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quae.",
      author: "John Doe",
      designation: "CEO",
      authorImage:
        "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      image:
        "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quae.",
      author: "John Doe",
      designation: "CEO",
      authorImage:
        "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <section className="py-10 px-20">
      <div className="text-black dark:text-white">
        <div className="text-5xl font-bold text-center py-4 dark:text-gray-300">
          Latest from Our Blogs
        </div>
        <div className="grid grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              image={blog.image}
              content={blog.content}
              author={blog.author}
              designation={blog.designation}
              authorImage={blog.authorImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
