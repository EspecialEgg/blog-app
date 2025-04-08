import { FaArrowRightLong } from "react-icons/fa6";

type BlogCardProps = {
  id: string;
  title: string;
  author: string;
};

export default function BlogCard({ id, title, author }: BlogCardProps) {
  return (
    <article className="relative cursor-pointer lg:w-[22vw] lg:h-[38vh] p-6 group hover:bg-[#004934] hover:text-[#FFFFFF]">
      <h2 className="flex lg:justify-center pt-2 lg:text-[30px] hover:text-[#ffffff] mb-2">
        {title}
      </h2>
      <p className="italic mt-3">Av {author}</p>
      <div className="absolute bb-4 left-4 bottom-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all">
        <FaArrowRightLong size={24} className="text-[#cef261]" />
      </div>
    </article>
  );
}
