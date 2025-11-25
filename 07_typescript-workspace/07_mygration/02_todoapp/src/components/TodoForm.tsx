import React, { useState } from "react";

interface TodoFormPromps {
  addTodo: (title: string) => void;
}

function TodoForm({ addTodo }: TodoFormPromps) {
  const [value, setValue] = useState<string>("");

  const hanldeSumbit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value); // 새 Todo 추가 기능
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={hanldeSumbit}>
      <input type="text" value={value} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
