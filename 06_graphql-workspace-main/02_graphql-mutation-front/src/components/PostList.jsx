import { useQuery } from "@apollo/client/react";
import { GET_ALL_POSTS } from "../queries/postQueries";

function PostList({ setSelectedPostId }) {
  const { loading, error, data } = useQuery(GET_ALL_POSTS); // response === { loading: boolean, error: object, data: object }
  // data == {users: [{id, username}, {}, ..]}

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data || !data.posts) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      <h2>게시글</h2>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id} onClick={() => setSelectedPostId(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
