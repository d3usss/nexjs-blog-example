import { BlogPostMock } from "@/mocks/blog-post-mock";
import BlogCard from "@/app/components/Blog-card";

export default function Home() {
  return (
    <article className="flex justify-center items-start flex-wrap gap-4 mt-[2.5rem]">
        {BlogPostMock.map((post) => (<BlogCard id={post.id} tags={post.tags} title={post.title} description={post.description} key={post.id} imgUrl={post.imgUrl} />))}
    </article>
  )
}
