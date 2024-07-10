import { PostPreview } from "./post-preview";

type Props = {
  slug: string,
  title: string,
  date: string
};

export function PostList({ posts }: Props) {
  return (
    <>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </>
  );
}
