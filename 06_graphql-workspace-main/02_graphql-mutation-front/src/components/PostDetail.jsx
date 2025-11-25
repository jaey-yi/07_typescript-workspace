import { GET_POST_DETAIL } from "../queries/postQueries";
import { useQuery } from "@apollo/client/react";

function PostDetail({ posdId }) {
  const { loading, error, data } = useQuery(GET_POST_DETAIL, {
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
