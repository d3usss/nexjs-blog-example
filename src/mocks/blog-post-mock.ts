import { nanoid } from 'nanoid';
import { BlogPost } from "@/app/components/Blog-card";

export const BlogPostMock: Partial<BlogPost>[] = [
    {
      id: nanoid(10),
      title: 'All about conversions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['Article', 'conversion',],
      imgUrl: '/images/convertion-rate.jpg',
    },  
    {
      id: nanoid(10),
      title: 'SEO for google',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['google', 'SEO', 'optimalization'],
      imgUrl: '/images/search-optimalization.jpg',
    },  
    {
      id: nanoid(10),
      title: 'All about cusotomer expirence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['cusotomer', 'expirence', 'optimalization'],
      imgUrl: '/images/client-expirence.jpg',
    },
    {
      id: nanoid(10),
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['tag1', 'tag2', 'tag3'],
    },  
    {
      id: nanoid(10),
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['tag1', 'tag2', 'tag3'],
    },  
    {
      id: nanoid(10),
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['tag1', 'tag2', 'tag3'],
    }
  ]
  