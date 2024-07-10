import Container from "./_components/container";
import { PostList } from "./_components/posts/post-list";
import { getAllPosts } from "../lib/api";
import { Section }from "./_components/section"

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <>
    <Section title="Blog">
      {allPosts.length > 0 && <PostList posts={allPosts} />}
    </Section>
    </>
  );
}
