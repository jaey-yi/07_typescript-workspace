export {};

/*
  📌 any 타입
  1. 모든 타입을 허용할 때 사용
  2. 컴파일러의 타입 검사를 하지 않음 
  3. 타입스크립트의 안정성을 포기하는 개념이므로 특별한 경우 외에 권장하지 않음
*/

let anything: any;
anything = 10;
anything = "오레오";
anything = true;

// anything.do() ; 컴파일 에러는 없지마느 런타임시 에러가 발생함 (컴파일 시 오류를 알지 못하니 코드의 안정성 떨어짐)
// any = 타입검사가 업격하지 않음 ( 타입체크 없이 무분별하게 프로퍼티 접근 또는 연산 가능)

/*
  📌 unknown 타입
  1. any 타입과 유사하게 모든 타입을 허용하지만 더 안전한 타입
  2. 타입 검사가 엄격함
     → typeof 연산자 또는 타입 검사를 위한 함수를 사용하여  
       타입을 체크한 후 프로퍼티 접근 또는 연산을 수행할 수 있음 
  3. 주로 API 데이터같이 타입을 모를 때 임시 타입으로 사용 
*/

let everything: unknown;
everything = "배가아픔니다";

console.log(typeof everything);

if (typeof everything === "string") {
  console.log(everything.length); // unknown =  타입 검사 후에 프로프티 접근하도록 유도함 //but, 타입 체크를 먼저 하면 에러가 안뜸
}

//정리 : any 와 unknwon 의 차이
// 공통 : 모든타임을 허용 / unkwon : any 와 다르게 타입검사를 엄격하게 함/
