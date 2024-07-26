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
    <Section title="Blog Intro">
      <div className="mb-4">Hello, world! This is my blog. I write about education. These posts approach these topics from an individualistic point of view. So, they'll feel more like reflections than academic writings. There are many theories and established models in the academic field of education. However, due to the unique quirks and diversity of being human, it's challenging to convert these theories and models into practice. The issue isn't that the research methods are ineffective, but rather that the degree of randomness among human beings is so great that it's hard to find a one-size-fits-all model from a handful of interviews and a survey.
      </div>
      <div className="mb-4">In the end, we get controversial reviews about things liks designing curriculums, running classrooms, school schedules that are difficult to make use of. Regardless, I admire this diversity even if it makes life a little harder because it makes way to new thinking and ideas. Here, I do my best to share mine.
      </div>
      <div className="mb-4">I have a couple reasons for writing this blog. The primary one is to collect my personal thoughts on education. Rereading my thoughts from a year ago could spark new ideas I couldn't have thought of at the time of writing. Another, more philosophical, one is to convince myself that education, while an entire field of research of its own, is personal. With all the media today, it's easy suppress personal thoughts and pigeonhole yourself into a certain type of thinker when, in reality, it's much more complex than that. And, by serving this blog to the public domain, it becomes a reassuring reminder that someone out there, namely me, share the same thoughts as me.
      </div>
    </Section>
    <Section title="Blog">
      {firstFivePosts.length > 0 && <PostList posts={firstFivePosts} />}
      {allPosts.length > 5 && (<Link href={`/posts`} className="underline text-blue-500">See all posts</Link>)}
    </Section>
    </>
  );
}
