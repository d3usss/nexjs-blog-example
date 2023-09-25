import Image from "next/image";

export interface BlogPost {
    id: string;
    imgUrl?: string;
    title: string;
    description: string;
    tags: string[];
    authorName: string;
    autgorImgUrl: string;
    date: string;
    time: number;
}

export default function BlogCard({ imgUrl, title, description, tags, authorName, autgorImgUrl, date, time }: BlogPost) {

    return (
        <div className="w-[384px] h-[fit-content] bg-base-100 shadow-xl">
            <figure>
                <Image src={imgUrl ? imgUrl : '/images/blog-posts/blog-post.jpg'} alt={title} width={385} height={255} className="max-h-[255px]"/>
            </figure>
            <div className="card-body text-left">
                <div className="card-actions justify-start min-h-[20px] mb-2">
                    {tags ? tags.map((tag, index) => (<div className="badge badge-outline" key={`${index}-${tag}`}>{tag}</div>))  : null}
                </div>
                <h2 className="card-title text-left">
                    {title}
                </h2>
                <p>
                    {description}
                </p>
                <footer className="flex justify-start items-center py-2 gap-4">
                    <figure>
                        <Image src={autgorImgUrl} alt={authorName} width={40} height={40} className="rounded-full border-gray-600 border-[1px]"/>
                    </figure>
                    <div className="text-left">
                        <p className="font-bold leading-5">{authorName}</p>
                        <p>{`${date} - ${time} min read`}</p>
                    </div>
                </footer>
            </div>
        </div >
    )
}