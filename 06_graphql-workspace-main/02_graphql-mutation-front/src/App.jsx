import { useState } from "react";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";
import { useMutation } from "@apollo/client/react";
import { useQuery } from "@apollo/client/react";
import { DELETE_POST } from "./queries/postQueries";
import { GET_ALL_POSTS } from "./queries/postQueries";

function App() {
  // 선택된 게시글의 id 를 관리하는 상태 변수
  const [selectedPostId, setSelectedPostId] = useState(null);

  const [deletePost, { loading, error, data }] = useMutation(DELETE_POST, {
    refetchQueries: [GET_ALL_POSTS],
  });

  const handleDeletePost = async (e) => {
    const response = await deletePost({
      variables: { postId: selectedPostId },
    });

    alert(`"${response.data.deletePost.title} 게시글이 삭제되었습니다."`);
    setSelectedPostId(null);
  };

  return (
    <>
      <PostList setSelectedPostId={setSelectedPostId} />
      {selectedPostId && (
        <>
          <PostDetail postId={selectedPostId} />

          <button onClick={handleDeletePost}>해당 게시글 삭제</button>
        </>
      )}
      <PostForm />
    </>
  );
}

export default App;
