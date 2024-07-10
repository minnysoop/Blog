import { PostPreview } from "./post-preview";

type Props = {
  slug: string,
  title: string,
  date: string
};

export function PostList({ posts }: Props) {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold tracking-tighter leading-tight">
        Blog
      </h2>
      <div className="mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  );
}
