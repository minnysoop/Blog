import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <article className="mb-32 mt-16">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}