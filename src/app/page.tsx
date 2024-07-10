import Container from "@/app/_components/container";
import { PostList } from "@/app/_components/posts/post-list";
import { getAllPosts } from "@/lib/api";
import { Section }from "@/app/_components/section"

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
