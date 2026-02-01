import { link } from "fs";
import Link from "next/link";
type BlogCardProps = {
  title: string;
  image: string;
  description?: string;
  href: string;
  readtime?: string;
};

export default function BlogCard({
  title,
  image,
  description,
  href,
  readtime,
}: BlogCardProps) {
  return (
    <Link href={href} className="block">
      <div
        className=" group max-w-sm overflow-hidden m-10 p-5 rounded-2xl border border-gray-950 bg-gray-200 shadow-sm transition hover:shadow-lg"
        style={{ padding: "10px", margin: "10px" }}>
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden px-4">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-3 p-5">
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
            {title}
          </h3>

          {description && (
            <p className="line-clamp-3 text-sm text-gray-600">{description}</p>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-gray-400">{readtime}</span>

            <span className="text-emerald-700 animate-pulse ">Read more</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
