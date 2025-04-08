import { gql } from "graphql-tag";

const typeDefs = gql`
  type BlogPost {
    id: ID!
    title: String!
    author: String!
    date: String!
    content: String!
    image: String
  }

  type Query {
    getAllBlogPosts: [BlogPost!]!
    getBlogPost(id: ID!): BlogPost
  }

  type Mutation {
    createBlogPost(
      title: String!
      author: String!
      date: String!
      content: String!
      image: String
    ): BlogPost!
  }
`;

export default typeDefs;
