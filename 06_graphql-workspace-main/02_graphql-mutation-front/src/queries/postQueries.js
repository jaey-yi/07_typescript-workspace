import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      title
    }
  }
`;

export const GET_POST_DETAIL = gql`
  query GetPostDetail($postId: ID!) {
    post(id: $postId) {
      id
      title
      content
      author {
        username
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!, $authorId: ID!) {
    createPost(
      input: { title: $title, content: $content, authorId: $authorId }
    ) {
      id
      title
      content
      author {
        id
        username
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(id: $postId) {
      id
      title
      content
      author {
        id
        username
      }
    }
  }
`;
