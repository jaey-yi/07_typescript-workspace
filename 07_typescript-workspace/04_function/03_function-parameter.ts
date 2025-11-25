// export {}

/*
  📌 제네릭 타입 (Generic Type)
  1. 제네릭 정의 : 타입을 미리 정해두지 않고 사용하는 시점에서 지정할 수 있게 하는 기능 
  2. 즉, 타입을 파라미터로 받아 처리하는 타입
  3. 한가지 타입에만 국한되지 않고, 여러 타입에 대해 동일한 구조나 동작을 보장할 수 있음 
  4. 주로 컬렉션(배열, 객체) 타입에 사용
  5. 작성법
     <T> : 타입 파라미터 (T는 타입 변수, 임의의 타입을 의미)
*/

// 리엑트 에서의 실전 예시

interface User {
  name: string;
  age: number;
}

interface UserDetailProps {
  user: User;
  color: string;
}
/*
function UserDetailComponent(props: UserDetailProps) {
  console.log(`${props.user.name}은 ${props.user.age} 살 입니다`);
}

UserDetailComponent({
  user: { name: "홍길동", age: 20 },
  color: "red",
});*/

//

function UserDetailComponent({ user, color }: UserDetailProps) {
  console.log(`${user.name}은 ${user.age} 살 입니다`);
}

UserDetailComponent({
  user: { name: "홍길동", age: 20 },
  color: "red",
});
