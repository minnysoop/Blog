import Container from "@/app/_components/container";
import { PostList } from "@/app/_components/post-list";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="mx-auto w-3/4">
      <Container>
        {allPosts.length > 0 && <PostList posts={allPosts} />}
      </Container>
    </main>
  );
}
