import { BlogPostMock } from "@/mocks/blog-post-mock";
import BlogCard from "@/app/components/Blog-card";

export default function Home() {
  return (
    <main className="container max-w-[1920p] p-10 text-center">
      <header className="flex flex-col justify-center items-center">
        <h1>Next.js Blog Example</h1>
        <p className="w-[60ch] text-gray-400 text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.</p>
      </header>
      <section className="flex justify-center items-start flex-wrap gap-4 mt-[2.5rem]">
         {BlogPostMock.map((post) => (<BlogCard id={post.id} tags={post.tags} title={post.title} description={post.description} key={post.id} imgUrl={post.imgUrl} />))}
      </section>
    </main>
  )
}
