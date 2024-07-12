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
    <Section title="Introduction">
      <div className="mb-4">Hello, world! This is my blog. It's a place where I can rant, admire, and think about the things happenning around me. I reflect a lot. This blog could help me collect my thoughts. I feel fortunate to be in the midst of such fascinating technological developments (i.e. embedded systems, A.I, robotics, etc.). Without it, I could not have made this blog (well, actually, I probably could, it would just take a lot more work). Sometimes, it's crazy to think that things like technorealism/technoculture, impacts of intelligent systems on jobs, toxic digital media culture, and other similar stuff were once just mere "what if" thoughts. Now, they're real and we have scientists actually talking about them.</div>
      <div className="mb-4">
      So, this blog is sorta dedicated to those types of topics. However, I'm trying to approach these things in a more "personal" way. I believe that trying to gather insights on something that affects us so deeply is not achievable from reading a library book. There's just simply too much fabrication. Rather you'll find these in conversations, twitter posts, and things like that (i.e. this blog). With that, most of these posts are basically short reflections on my feelings, and thoughts on how I'm navigating through this blend of science fiction and reality. Read it or not, it's the "free will" you get when you are surfing the internet. I'm writing them anyway.
      </div>
    </Section>
    <Section title="Blog">
      {firstFivePosts.length > 0 && <PostList posts={firstFivePosts} />}
      {allPosts.length > 5 && (<Link href={`/posts`} className="underline text-blue-500">See all posts</Link>)}
    </Section>
    </>
  );
}
