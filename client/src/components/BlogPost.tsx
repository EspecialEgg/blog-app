import { gql, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const GET_BLOG_POST_BY_ID = gql`
  query GetBlogPost($id: ID!) {
    getBlogPost(id: $id) {
      id
      title
      author
      date
      content
      image
    }
  }
`;

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(GET_BLOG_POST_BY_ID, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <p>Loading blog post...</p>;
  if (error) return <p>Error loading blog post: {error.message}</p>;

  const post = data.getBlogPost;

  return (
    <div className="min-h-screen p-4">
      <Link to="/" className="flex flex-row items-center w-fit">
        <FaArrowLeftLong size={28} className="text-[#00342E]" />
        <p className="text-[18px] text-[#00342E] ml-2 mt-0.5">Tilbake</p>
      </Link>

      <div className="flex flex-col max-w-[700px] mt-20 mx-auto">
        <h2 className="text-[30px] text-[#00342E] mb-4">{post.title}</h2>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover mb-4"
        />
        <p className="italic mb-1">Av {post.author}</p>
        <p>Publisert {post.date}</p>
        <p className="mt-8 text-[18px]">{post.content}</p>

        <p className="text-[11px] mt-4">
          Tekstene er generert av kunstig intelligens (ChatGPT).
        </p>
      </div>
    </div>
  );
}
