type Todo = {
  id: number;
  text: string;
  done: boolean;
};

//기능 정의 : 전달되는 Todo 할일 객체의 상태를 반전시킨 새로운 Todo 객체를 반환하는 함수

function toggleTodo(todo: Todo): Todo {
  // 개발시점(컴파일 시점) 에서 타입 오류를 발견할 수 있음
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done,
  };
}

// 테스트 given, when , then
// given
const todo = {
  id: 1,
  text: "우유사기",
  done: false,
};

const result = toggleTodo(todo);

console.log(`Expect : {id : 1, text : 우유사기 , }`);
