"use client";
import BlogCard from "../blogCard/BlogCard";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { blogs } from "@/data/blogs";
import { usePathname } from "next/navigation";

export default function Blogs() {
  const [blogsData, setBlogsData] = useState(blogs);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const location = usePathname();
  useEffect(() => {
    if (location === "/blogs") {
      setBlogsData(blogs);
    } else {
      const filteredBlogs = blogs.slice(0, 3);
      setBlogsData(filteredBlogs);
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 my-20 mb-40" id="blog">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
      >
        <ExploreArrow href="/blogs" titleClassName="md:text-4xl text-3xl font-bold" title="Latest Blog Posts" arrowText="View All" />
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 my-12"
      >
        {blogsData.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.5, delay: blog.id * 0.3 }}
          >
          <BlogCard
            key={blog.id}
            imgSrc={blog.imgSrc}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            author={blog.author}
              category={blog.category}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
