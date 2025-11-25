// 필요한 모듈들
import { ApolloServer } from "@apollo/server"; // Apollo Server 핵심 라이브러리
import { expressMiddleware } from "@as-integrations/express5"; // Express에 Apollo Server를 연결해 주는 미들웨어
import express from "express"; // HTTP 서버(Express) 모듈
import cors from "cors"; // CORS 허용을 위한 모듈

// 샘플 데이터 (In-Memory DB)
const users = [
  { id: "1", username: "Alice", age: 25 },
  { id: "2", username: "Bob", age: 30 },
  { id: "3", username: "Charlie", age: 35 },
];

const posts = [
  {
    id: "101",
    title: "GraphQL Intro",
    content: "GraphQL은 REST API 대신 사용하는 새로운 쿼리 언어입니다.",
    authorId: "1",
  },
  {
    id: "102",
    title: "React Hooks",
    content: "React Hooks는 React 16.8에 도입된 새로운 기능입니다.",
    authorId: "1",
  },
  {
    id: "103",
    title: "Vite vs CRA",
    content: "Vite와 CRA는 각각 다른 빌드 툴입니다.",
    authorId: "2",
  },
];

const typeDefs = `
  type User {
    id: ID!
    username: String!
    age: Int
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String
    author: User
  }

  type Query {
    users: [User]
    posts: [Post]
    user(id: ID!): User
    post(id: ID!): Post
  }
    type Mutation {
    createPost(title: String!, content: String, authorId: ID!): Post
    deletePost(id: ID!): Post
    } 
`;

// Mutation 타입 정의
// createPost: 새 게시글 생성, deletePost: 게시글 삭제
// 뭘 넘겨 받는지 : 뭘 반환하는지

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
    // 두번째 인수로 클라이언트가 보낸 인수가 담겨옴 (예. {id: '1'})
    user: (_, { id }) => users.find((user) => user.id === id),
    post: (_, { id }) => posts.find((post) => post.id === id),
  },

  // 중첩 리졸버 정의
  User: {
    // parent는 상위 리졸버(User)의 결과
    posts: (parent) => posts.filter((post) => post.authorId === parent.id),
  },

  Post: {
    // parent는 상위 리졸버(Post)의 결과
    author: (parent) => users.find((user) => user.id === parent.authorId),
  },
  Mutation: {
    // Mutation 이 실행될 때 호출되는 리졸버 함수들
    createPost: (_, { title, content, authorId }) => {
      // 새로운 게시글 객체 생성
      const newPost = {
        id: String(posts.length + 101), // 간단한 ID 생성 로직
        title,
        content: content || "",
        authorId,
      };

      // DB 배열에 게시글 추가
      posts.push(newPost);
      // 새로 생성된 게시글 반환
      return newPost;
    },
    deletePost: (_, { id }) => {
      // DB 배열에서 해당 id를 가진 게시글의 인덱스 찾기
      const postIndex = posts.findIndex((post) => post.id === id);
      // slice를 이용해 해당 게시글을 배열에서 제거하고 반환
      const deletePost = posts.splice(postIndex, 1)[0];
      // [삭제된 요소 객체] 반환
      return deletePost;
    },
  },
};

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  const app = express();
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(
      `🚀 GraphQL 서버가 http://localhost:${PORT}/graphql 에서 실행 중입니다.`
    );
  });
}

startServer();
