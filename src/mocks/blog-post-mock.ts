import { nanoid } from 'nanoid';
import { BlogPost } from "@/app/components/Blog-card";

export const BlogPostMock: Partial<BlogPost>[] = [
    {
      id: nanoid(10),
      title: 'All about conversions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['Article', 'conversion',],
      imgUrl: '/images/blog-posts/convertion-rate.jpg',
      authorName: 'Angelina Doe',
      autgorImgUrl: '/images/authors/person1.jpg',
      date: '2021-01-01',
      time: 5,
    },  
    {
      id: nanoid(10),
      title: 'SEO for google',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['google', 'SEO', 'optimalization'],
      imgUrl: '/images/blog-posts/search-optimalization.jpg',
      authorName: 'John Doe',
      autgorImgUrl: '/images/authors/person2.jpg',
      date: '2022-02-04',
      time: 10,
    },  
    {
      id: nanoid(10),
      title: 'All about cusotomer expirence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['cusotomer', 'expirence', 'optimalization'],
      imgUrl: '/images/blog-posts/client-expirence.jpg',
      authorName: 'Jessica Potter',
      autgorImgUrl: '/images/authors/person3.jpg',
      date: '2021-06-06',
      time: 2,
    },
    {
      id: nanoid(10),
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['tag1', 'tag2', 'tag3'],
      authorName: 'John Doe',
      autgorImgUrl: '/images/authors/person2.jpg',
      date: '2023-10-1',
      time: 2,
    },  
    {
      id: nanoid(10),
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['tag1', 'tag2', 'tag3'],
      authorName: 'John Doe',
      autgorImgUrl: '/images/authors/person2.jpg',
      date: '2021-06-06',
      time: 4,
    },  
    {
      id: nanoid(10),
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.',
      tags: ['tag1', 'tag2',],
      authorName: 'Jessica Potter',
      autgorImgUrl: '/images/authors/person3.jpg',
      date: '2021-06-06',
      time: 5,
    }
  ]
  