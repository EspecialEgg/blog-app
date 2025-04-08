import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const GET_ALL_BLOG_POSTS = gql`
  query GetAllBlogPosts {
    getAllBlogPosts {
      id
      title
      author
      date
    }
  }
`;

export default function BlogList() {
  const { data, loading, error } = useQuery(GET_ALL_BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog posts: {error.message}</p>;

  return (
    <div className="flex flex-col min-h-screen lg:p-4">
      <h1 className="text-[20px] lg:text-[32px] underline text-[#00342E] mb-3 p-2 flex justify-center lg:justify-start">
        Aktuelle blogginnlegg
      </h1>
      <article>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 lg:gap-4 w-full">
          {data.getAllBlogPosts.map((post: any) => (
            <li key={post.id} className="text-black p-2 m-2">
              <Link to={`/blogs/${post.id}`}>
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                />
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
