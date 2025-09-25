import Blogs from "@/components/home/Blogs";

export default function BlogsPage() {
  return (
    <>
      <div className="text-center h-[400px] text-white">
        <h2 className="md:text-6xl text-4xl font-bold mb-4">Blogs</h2>
        <p className="text-xl font-semibold">Explore our latest blogs</p>
      </div>
      <div>
        <Blogs />
      </div>
    </>
  );
}