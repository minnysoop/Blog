import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  slug,
}: Props) {
  return (
    <div>
      <h4 className="text-1xl mb-3 leading-snug">
        <DateFormatter dateString={date} />
        <span> | </span>
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h4>
    </div>
  );
}
