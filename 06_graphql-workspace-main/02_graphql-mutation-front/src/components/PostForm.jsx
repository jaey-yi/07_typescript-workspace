import { useMutation } from "@apollo/client/react";
import React, { useState } from "react";
import { CREATE_POST } from "../queries/postQueries";
import { GET_ALL_POSTS } from "../queries/postQueries";

function PostForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    authorId: "",
  });

  const [createPostSubmit, { loading, error, data }] = useMutation(
    CREATE_POST,
    {
      refetchQueries: [GET_ALL_POSTS],
      // 뮤테이션 완료 후 지정한 쿼리 재실행
      //  refetchQueries: ['GetAllPosts']
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // 뮤테이션 실행
    createPostSubmit({
      variables: {
        ...formData,
      },
    });
    // 등록 완료 후 1) 폼 초기화
    setFormData({ title: "", content: "", authorId: "" });
    // 등룍 완료 2) 게시글 목록 갱신
  };
  return (
    <div>
      <h2>게시글 등록</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="내용"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          placeholder="작성자ID"
          value={formData.authorId}
          onChange={(e) =>
            setFormData({ ...formData, authorId: e.target.value })
          }
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "게시글 등록중 .. " : "게시글 등록"}
        </button>
      </form>
      {data && <p>게시글이 성공적으로 등록되었습니다! </p>}
    </div>
  );
}

export default PostForm;
