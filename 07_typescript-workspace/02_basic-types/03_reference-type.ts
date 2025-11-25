export {};

/*
  📌 객체 타입 
  1. 자바스크립트의 객체(원시값 제외)를 표현하는 타입
  2. 종류
    1) object : 타입 단순 지정
    2) {속성: 타입, ..} : 객체 리터럴 타입 지정
*/

// object = 모든 객체 타입 가능, 원시타입 불가
let obj1: object;
obj1 = { name: "홍길동", age: 20 };
obj1 = [1, 2, 3];
obj1 = () => console.log("hi");
console.log(obj1);
// obj 1 = 42;

/*
  📌 배열 타입 (Array Types)
  1. 자바스크립트의 배열을 표현하는 타입
  2. 종류
    1) [] : 타입 단순 지정
    2) Array<타입> :제네릭 타입 Array<> 사용
*/

//2) {} : 객체 리터럴 타입
let obj2: { name: string; age: number };
obj2 = { name: "홍길동", age: 20 };

// 1) [] : 타입 단순 지정 => 일반적
let nums1: number[] = [1, 2, 3];
let str1: string[] = ["hello", "world"];

console.log(typeof nums1);

// 2) Array<타입> : 제네릭 타입
let num2: Array<number> = [1, 2, 3];
let str2: Array<string> = ["hello", "world"];

// 번외객체 배열
let users: { name: string; age: number }[];
users = [
  { name: "이재희", age: 20 },
  { name: "이재힁", age: 30 },
];
/*
  📌 튜플 타입 (Tuple Types)
  1. 고정 길이, 각 요소마다의 타입을 지정 할 때 사용
  2. 작성법
    [타입, 타입, ..]
  3. 유의사항
    튜플 타입 지정 시 각 요소의 순서와 타입이 중요
*/

let tuple1: [number, string, boolean] = [10, "우유", true];
let tuple2: [number, string] = [10, "hello"];

//[false, 'bye' , 1, 2, 3, 숫자들 ] ?
let tuple3: [boolean, "string", ...number[]];
let tuple4: [boolean, "string", ...any[]];
