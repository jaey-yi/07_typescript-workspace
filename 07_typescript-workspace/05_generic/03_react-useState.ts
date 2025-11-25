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

//--------------------------------------------------------------------------

/*
  📌 Exclude<T, U>, Extract<T, U> 타입
  1. Exclude : T 타입(유니언)에서 U 타입의 프로퍼티를 제외한 나머지 타입들로 새로운 타입을 만들어주는 타입
  2. Extract : T 타입(유니언)에서 U 타입의 프로퍼티와 중복된 프로퍼티들만 추출하여 새로운 타입을 만들어주는 타입
*/
