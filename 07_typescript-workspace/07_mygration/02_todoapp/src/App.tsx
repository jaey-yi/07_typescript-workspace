import { useEffect, useState } from "react";
import type { Todo } from "./components/types";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); // TODO 객체의 배열만 값으로 들어올 ㅅ ㅜ음
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5") // 반환 : Promise<Response>
      .then((response) => response.json()) // 반환 Promise<any>
      .then((data: Todo[]) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);
  const addTodo = (title: string): void => {
    //새 todo 객체
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false,
      userId: 1,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <div className="App">
        <h1>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} />
      </div>
    </>
  );
}

export default App;
