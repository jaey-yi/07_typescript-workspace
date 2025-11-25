import React from "react";

const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      title
      content
    }
  }
`;

function PostList({ setSelectedUserId }) {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  // data === {posts: [ {id, title, content}, ... ]}

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

export default PostList;
