import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// (CSS는 생략)

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // API 호출 (useEffect, fetch) - 초기 todo 목록 가져오기
  useEffect(() => {
    // JSONPlaceholder API 사용
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5") // 5개만 가져오기
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  // 새 Todo 추가 (Props로 전달될 함수)
  const addTodo = (title) => {
    // 새 Todo 객체 (id는 임의로 생성)
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
      userId: 1, // 임의로 추가
    };
    setTodos([newTodo, ...todos]);
  };

  // 3. Todo 완료/미완료 (Props로 전달될 함수)
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
