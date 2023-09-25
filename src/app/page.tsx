import { BlogPostMock } from "@/mocks/blog-post-mock";
import BlogCard from "@/app/components/Blog-card";

export default function Home() {
  return (
    <article className="flex justify-center items-start flex-wrap gap-4 mt-[2.5rem]">
      {BlogPostMock.map((post) => {
        const { id, tags, title, description, imgUrl, authorName, autgorImgUrl, time, date } = post;
        return (<BlogCard
          tags={tags}
          title={title}
          description={description}
          key={id}
          imgUrl={imgUrl}
          autgorImgUrl={autgorImgUrl}
          authorName={authorName}
          time={time}
          date={date}
        />)
      })}
    </article>
  )
}
