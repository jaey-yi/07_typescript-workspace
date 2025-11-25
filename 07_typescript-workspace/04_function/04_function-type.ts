export {};

/*
  📌 Call Signature (함수 타입 선언 구문)
  1. 함수 타입을 정의할 때 매개변수와 반환값의 타입을 명시적으로 지정하는 방법
  2. 작성법
     (매개변수: 타입) => 반환값 타입;
  3. 재사용을 위해 타입별칭 사용하는 것이 좋음 
*/

// 두 수를 전달 받아서 결과값 (숫자) 을 반환 하는 덧셈 - 뺄셈- 곱셈 - 나눗셈 함수 정의
const sum: (a: number, b: number) => number = (a, b) => a + b;

type Operation = (a: number, b: number) => number;
//

// 함수의 타입 객체 선언 => 불러오기 이용해서 바로 함수 사용 가능
const substract: Operation = (a, b) => a - b;

console.log(substract(3, 4));

const divide: Operation = (a) => a / 10; // 함수를 만들때는 , 불러오는 함수의 매개 변수 전부 다 넣지 않아도 됨
console.log(divide(120, 0)); // 그러나 사용할때는 ,불러오기 한 함수의 매개변수에 맞춰야 함
