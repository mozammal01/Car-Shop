import BlogCard from "../blogCard/BlogCard";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import BMWXB7 from "@/../public/blogs/BMW-XB7.png";
import BMWX5 from "@/../public/blogs/BMW-X5.png";
import BMWX6 from "@/../public/blogs/BMW-X6.png";

export default function Blogs() {
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
    <div className="max-w-[1500px] mx-auto px-4 my-20 mb-40">
      <div className="flex items-center justify-between">
        <h1 className="md:text-4xl text-3xl font-bold">Latest Blog Posts</h1>
        <ExploreArrow text="View All" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
}
