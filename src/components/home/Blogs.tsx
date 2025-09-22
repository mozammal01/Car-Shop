"use client";
import BlogCard from "../blogCard/BlogCard";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import BMWXB7 from "@/../public/blogs/BMW-XB7.png";
import BMWX5 from "@/../public/blogs/BMW-X5.png";
import BMWX6 from "@/../public/blogs/BMW-X6.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const blogs = [
    {
      imgSrc: BMWXB7,
      title: "Extraordinary",
      description: "2024 BMW ALPINA XB7 with exclusive details,",
      date: "December 21, 2021",
      author: "Admin",
      category: "Sound",
    },
    {
      imgSrc: BMWX6,
      title: "sportiest.",
      description: "BMW X6 M50i is designed to exceed your,",
      date: "December 21, 2021",
      author: "Admin",
      category: "Accessories",
    },
    {
      imgSrc: BMWX5,
      title: "Sport",
      description: "BMW X5 Gold 2024 Sport Review: Light on,",
      date: "December 21, 2021",
      author: "Admin",
      category: "Exterior",
    },
  ];
  return (
    <div className="container mx-auto px-4 my-20 mb-40">
      <div className="flex items-center justify-between">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="md:text-4xl text-3xl font-bold"
        >
          Latest Blog Posts
        </motion.h2>
        <ExploreArrow href="/blogs" text="View All" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 my-12"
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </motion.div>
    </div>
  );
}
