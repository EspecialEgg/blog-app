import { data } from "./data.js";

type BlogPost = {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
};

const blogPosts = data as Array<BlogPost>;

const resolvers = {
  Query: {
    getAllBlogPosts: () => blogPosts,
    getBlogPost: (_: any, { id }: { id: string }) =>
      blogPosts.find((post) => post.id === id),
  },
  Mutation: {
    createBlogPost: (
      _: any,
      {
        title,
        author,
        date,
        content,
        image,
      }: {
        title: string;
        author: string;
        date: string;
        content: string;
        image: string;
      }
    ) => {
      const newPost = {
        id: String(blogPosts.length + 1),
        title,
        author,
        date,
        content,
        image,
      };
      blogPosts.push(newPost);
      return newPost;
    },
  },
};

export default resolvers;
