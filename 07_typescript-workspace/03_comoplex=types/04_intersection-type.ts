export {};

/*
  📌 인터섹션 타입 (Intersection Types)
  1. 여러 타입을 "교집합"으로 표현할 때 사용
  2. 타입들을 모두 만족해야 하는 새로운 타입을 만들어줌 
  3. 작성법
     타입1 & 타입2 & 타입3 
*/

type Person = {
  name: string;
  age: number;
  job?: string;
};

type Worker = {
  company: string;
  position: string;
};

type Employee = Person & Worker;

let emp: Employee = {
  name: "John",
  age: 33,
  job: "Product Manager",
  company: "Loy",
  position: "사원",
};

interface User {
  id: number;
  name: string;
  email?: string;
}

const user1: User = {
  id: 1,
  name: "오리",
};

const user2: User = {
  id: 2,
  name: "가재",
  email: "gajea@example.com",
};
