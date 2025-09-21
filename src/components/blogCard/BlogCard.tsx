import Image from "next/image";
import { cn } from "@/lib/utils";
import { BlogCardProps } from "@/interfaces/shared-interfaces";

export default function BlogCard({ imgSrc, title, description, date, author, category }: BlogCardProps) {
  return (
    <div className="w-[447px] h-[411px] bg-white rounded-md rounded-t-2xl">
      <div className="relative">
        <Image src={imgSrc} alt={title} width={447} height={298} className="rounded-2xl object-cover" />
        {category && (
          <span
            className={cn(
              "absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-full ",
            )}
          >
            {category}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 my-4 px-4">
        <p className="">{author}</p>
        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
        <p>{date}</p>
      </div>
      <div className="font-semibold px-4">
        <p>{description}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}
