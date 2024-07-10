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
    <Section title="About">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam accusantium natus sunt autem impedit asperiores voluptatem cumque. Nihil pariatur placeat sed facilis laborum doloribus quia rerum atque, possimus nostrum iure accusamus voluptates magnam. Tempora distinctio non optio dicta ipsam obcaecati a, odit maiores atque cupiditate animi consequatur nemo enim qui doloremque unde. Quod reiciendis dignissimos ratione laboriosam odio eveniet, at cupiditate obcaecati magnam quibusdam. Inventore architecto ducimus harum nostrum cumque incidunt nemo deserunt cupiditate, facere beatae non nihil! Provident facilis vel molestiae obcaecati ipsam nam, numquam, eligendi sequi dicta vero quis sapiente, vitae dolorum sed incidunt totam fugiat. Voluptates!</div>
    </Section>
    <Section title="Blog">
      {firstFivePosts.length > 0 && <PostList posts={firstFivePosts} />}
      {allPosts.length > 5 && (<Link href={`/posts`} className="underline text-blue-500">See all posts</Link>)}
    </Section>
    </>
  );
}
