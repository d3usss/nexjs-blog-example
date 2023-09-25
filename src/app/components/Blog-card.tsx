import Image, { StaticImageData } from "next/image";

export interface BlogPost {
    id: string;
    imgUrl?: string;
    title: string;
    description: string;
    tags: string[];
}

export default function BlogCard({ imgUrl, title, description, tags }: BlogPost) {

    return (
        <div className="w-[384px] h-[520px] bg-base-100 shadow-xl">
            <figure>
                <Image src={imgUrl ? imgUrl : '/images/blog-post.jpg'} alt={title} width={384} height={216} />
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
            </div>
        </div >
    )
}