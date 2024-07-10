import Container from "./_components/container";
import { PostList } from "./_components/posts/post-list";
import { getAllPosts, getRecentFive } from "../lib/api";
import { Section }from "./_components/section"
import Link from 'next/link';

export default function Index() {
  const allPosts = getAllPosts();
  const firstFivePosts = getRecentFive();

  return (
    <>
    <Section title="Blog">
      {firstFivePosts.length > 0 && <PostList posts={firstFivePosts} />}
      {allPosts.length > 5 && (<Link href={`/posts`} className="underline text-blue-500">See all posts</Link>)}
    </Section>
    </>
  );
}
