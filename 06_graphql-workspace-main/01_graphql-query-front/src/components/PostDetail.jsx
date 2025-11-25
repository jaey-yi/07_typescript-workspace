import React from "react";
import { gql } from "@apollo/client";

const Get_Post_Detail = gql`
  query GetPostDetail($postId: ID!) {
    post(id: $postId) {
      title
      content}
      author {
        username
      }
    }
  }
`;

function PostDetail({ posdId }) {
  const { loading, error, data } = useQuery(Get_Post_Detail, {
    variables: { postId: posdId },
  });
  // data === {post: {title: "...", content: "...", author: {username: "..."}}}

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>선택된 게시글 상세 정보 </h2>
      <p> ID : {data.post.id}</p>
      <p>Title: {data.post.title}</p>
      <p>Content: {data.post.content}</p>
      <p>작성자명: {data.post.author.username}</p>
    </div>
  );
}

export default PostDetail;
