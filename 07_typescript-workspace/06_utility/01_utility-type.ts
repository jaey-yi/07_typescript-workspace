export {};

interface Student {
  id: number;
  name: string;
  age: number;
  email?: string; // email은 선택적 속성
}

/*
  📌 Partial<T> 타입 
  1. T 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
  2. 예시 
      interface Person {
        name: string;
        age?: number;
      }
      type PartialPerson = Partial<Person>;
      PartialPerson은 { 
        name?: string; 
        age?: number 
      } 
        타입과 동일
*/
// 학생정보 수정 함수
function updateStudent(student: Partial<Student>): void {}

updateStudent({
  id: 1,
  name: "Alice",
});
// Partial<Student> : 불러온느 매개속성 전체를 선택속성으로 바꿔줌

/*
  📌 Required<T> 타입 
  1. T 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
  2. 예시 
      interface Person {
        name: string;
        age?: number;
      }
      type RequiredPerson = Required<Person>;
      RequiredPerson은 { 
        name: string; 
        age: number 
      } 
        타입과 동일
*/
function detailStudent(student: Required<Student>) {
  console.log("d");
}

// Required<student> : 불러온느 매개속성 전체를 필수속성으로 바꿔줌

/*
  📌 Readonly<T> 타입
  1. T 타입의 모든 프로퍼티를 읽기 전용으로 바꿔주는 타입
  2. 예시 
      interface Person {    
        name: string;
        age: number;
      }
      type ReadonlyPerson = Readonly<Person>;
      ReadonlyPerson은 { 
        readonly name: string;  
        readonly age: number;
      } 
      타입과 동일
*/
// 불변성 을 유지하여  사용
function displayStudentInfo(student: Readonly<Student>) {
  console.log("d");
}

displayStudentInfo({
  id: 3,
  name: "dhdld",
  age: 20,
});
//<Readonly>Student : 정보 출력만 가능하게 나요

/*
  📌 Pick<T, K> 타입
  1. T 타입에서 K 프로퍼티들만 뽑아서 새로운 타입을 만들어주는 타입
  2. 예시 
      interface Person {  
        name: string;
        age: number;
        email: string;
      }
      type PickedPerson = Pick<Person, 'name' | 'email'>;
      PickedPerson은 { 
        name: string;   
        email: string;
      } 
      타입과 동일
*/

// 학생목록 전달 받아 출력
function printAttendanceList(student: Pick<Student, "id" | "name">[]) {}

printAttendanceList([
  { id: 1, name: "훈이" },
  { id: 2, name: " 짱구" },
]);

// Pick<Student, "id" | "name">[] : 물려받는 함수의 타입 중, 일부만 선택해 배열로 만듬

/*
  📌 Omit<T, K> 타입
  1. T 타입에서 K 프로퍼티들만 제외한 나머지 프로퍼티들로 새로운 타입을 만들어주는 타입 
  2. 예시
      interface Person {  
        name: string; 
        age: number;
        email: string; 
      }
      type OmittedPerson = Omit<Person, 'email'>;
      OmittedPerson은 { 
        name: string;   
        age: number;
      }
      타입과 동일
*/

// 신규학생
function registStudent(student: Omit<Student, "email">) {}

/*
  📌 Record<K, T> 타입
  1. K 프로퍼티들을 키로 가지고, T 타입의 값들을 가지는 객체 타입을 만들어주는 타입
  2. 예시 
      type Role = 'admin' | 'user' | 'guest';
      type RolePermissions = Record<Role, string[]>;
      RolePermissions은 { 
        admin: string[];  
        user: string[];  
        guest: string[];
      } 
      타입과 동일
*/
// A,B,C 학점별 학생 관리

//--------------------------------------------------------------------------

/*
  📌 Exclude<T, U>, Extract<T, U> 타입
  1. Exclude : T 타입(유니언)에서 U 타입의 프로퍼티를 제외한 나머지 타입들로 새로운 타입을 만들어주는 타입
  2. Extract : T 타입(유니언)에서 U 타입의 프로퍼티와 중복된 프로퍼티들만 추출하여 새로운 타입을 만들어주는 타입
*/

// 사용자 역할

type UserRole = "최종관리" | "관리" | "편집" | "독자" | "손님";

//직원 역학 타입

type StaffRole = Exclude<UserRole, "독자" | "손님">;

//관리자
type Admin = Extract<UserRole, "최종관리" | "관리" | "편집">;
