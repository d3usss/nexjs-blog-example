import Image, { StaticImageData } from "next/image";
import imgUrl1 from "@/assets/images/blog-post.jpg"

export interface BlogPost {
    id: string;
    imgUrl?: StaticImageData;
    title: string;
    description: string;
    tags: string[];
}

export default function BlogCard({ imgUrl, title, description, tags }: BlogPost) {

    return (
        <div className="w-[384px] h-[520px] bg-base-100 shadow-xl">
            <figure>
                {imgUrl1 ? (<Image src={imgUrl1} alt={title} width={384} height={216} />) : null}
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