export {};

//특정 타입의 데이터를 전달 했을 때 해당 타입의 데이터를 반환하는 함수를 정의해보기

function getData1(anything: any): any {
  return anything;
}

const num1 = getData1(1);
const str1 = getData1("string");

console.log(num1);
//console.log(num1.toUpperCase()); // 원래 오류를 찾아야하는데, (숫자를 영어 대문자로) 오류 표시 못함 = anytype 이라서
console.log(str1);

// 각 타입별 함수 정의? => 동일로직, but 타입이 다른 여러개 함수 정의
// 중복 줄이는 방법 : generic
//함수이름<타입>(매개변수)
// anything 이지만, 함수 사용 시 매개변수 타입 제한설정 가능
function getData2<T>(anything: T): T {
  // 내가 설정한 타입 T
  return anything;
}

const num2 = getData2<number>(2);
// console.log(num2.toUpperCase) //<타입> 을 기준으로, 오류를 컴파일링함
console.log(num2.toFixed);

/*
  📌 제네릭 타입 (Generic Type)
  1. 제네릭 정의 : 타입을 미리 정해두지 않고 사용하는 시점에서 지정할 수 있게 하는 기능 
  2. 즉, 타입을 파라미터로 받아 처리하는 타입
  3. 한가지 타입에만 국한되지 않고, 여러 타입에 대해 동일한 구조나 동작을 보장할 수 있음 
  4. 주로 컬렉션(배열, 객체) 타입에 사용
  5. 작성법
     <T> : 타입 파라미터 (T는 타입 변수, 임의의 타입을 의미)
*/

type Box<T> = {
  value: T;
};

const box1: Box<string> = {
  value: "hello",
};

const box2: Box<number> = {
  value: 30000000000000000000000000000000000000000000000000000,
};

console.log(box2);

//

// 유저타입
interface User {
  id: number,
  name: string,
  email: string,
  idAdmin: boolean
}

// 도서 타입
interface Book{
  id: number;
  title: string;
  author: string;
  price: number;
}


// API 요청 후 응답 데이터에 대한 타입 정의
// 상황에 따라

 

interface ApiRespopnce <> = {
  status: number,
  success: boolean
}

const useRespopnse: ApiRespopnce<User[]> = {
  status: 200,
  success: true,
  data: [
    {
      id: 1,
      name: '홍길동',
      email: 'hon@',
      isAdmin: false
    },
    {
      id: 2,
      name: "성춘향",
      email: "seong@",
      isAdmin : true
    }]
}
  

const errorResponse: ApiRespopnce<{ message: string }> = {
  status: 500,
  success: false,
  data: {
    message: "internal Server Error"
  }
}