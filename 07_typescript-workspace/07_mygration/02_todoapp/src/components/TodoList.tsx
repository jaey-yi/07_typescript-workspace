import TodoItem from "./TodoItem";
import type { Todo } from "./types";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
}

function TodoList({ todos, toggleComplete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
}

export default TodoList;
