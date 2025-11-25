export {};

/*
  📌 enum 타입
  1. 연관된 상수 값 집합을 그룹화하여 재사용 및 가독성 향상
  2. 특정 값 집합 중 하나로 변수 타입을 제한 (타입 안정성이 높아 오직 지정된 값만 허용)
  3. 값의 집합이 고정되어 있거나 서로 밀접하게 연관된 값들을 명확하게 표현하고자 할 경우 주로 사용
     ex) 역할, 권한, 방향, 상태 
  4. 숫자 또는 문자열 집합에 이름을 부여해 관리 
  5. 타입 선언 작성법 
    1) 숫자형 enum
        enum 타입명 {
         상수1,
         상수2,
         상수3,
       }
    2) 명시적 할당
        enum 타입명 {
         상수1 = 값1,
         상수2 = 값2,
         상수3 = 값3,
       }
    3) 문자열형 enum
        enum 타입명 {
         상수1 = "값1",
         상수2 = "값2",
         상수3 = "값3",
       }
*/

// 허용 색상이 RED, BLUE, GREEN 뿐인 경우
enum color {
  RED,
  GREEN,
  BLUE,
}

let col: color = color.GREEN;

//사용자 권한이 ADMIN ,USER, GUEST 외 혀용 금지일때

// 새로운 타입을 규정 = enum
enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

let user: {
  name: string;
  age: number;
  role: Role;
};

user = { name: "안녕", age: 10, role: Role.ADMIN };

console.log(user);

// 사용자의 권한이 USER 인지 확인하고 싶다면?

if (user.role === Role.USER) {
  console.log("해당사용자는 일반 사용자입니다");
}

export {};

/*
  📌 유니온 타입
  1. 여러 타입 중 하나를 허용하는 타입 
  2. 주로 여러 타입을 "합집합"으로 표현할 때 사용
  3. 작성법
     타입1 | 타입2 | 타입3
*/
