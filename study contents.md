## First JS Project
- 브라우저는 html을 열고 html은 css와 js를 가져온다.(html이 접착제 역할)-> js나 css를 브라우저에서 여는것이 아니다
- css를 html로 가져오는법-> link:css 하고 href에 해당 css넣기
- js를 html로 가져오는법 -> script:css 하고 src에 해당 js 넣기

## Basic Data Types
- 숫자 ex) 1,2,3,4.. 1.2 4.55
- 문자 ex ) "nico" + " hi" -> "nico

## Variables
- console.log() : console에 출력해주는 코드
### js에서 변수설정하는법
- const 변수명 = ~;
- 변수를 설정하면 값이 변경되었을때 여러번 바꿀 필요가 없다.

## const and let 
- const로 변수를 생성했다면 업데이트 할 수 없다.
- 반면에 let으로 변수를 생성하면 계속해서 값을 업데이트 할 수 있다.
- 기본적으로 const사용 업데이트 필요할때만 let 사용

## Booleans 
- true,false가 사용되는 예시 // 로그인했는가 , 웹사이트가 로딩되고 잇는가?
- null : 값이 아예 없다.
- undefined: 메모리에 변수가 저장되어있지만 값이 없다.

## Arrays
- 하나의 변수 안에 여러개의 데이터들을 list로 묶어놓은 것
- 큰 괄호([])안에 채워넣고 데이터사이는 쉼표로 구분한다.
- list의 첫번째 index는 0이다.
- Add one more dat to the array //  daysOfWeek.push("sun");
- 기존에있는 리스트 업데이트 하기 // daysofWeek[6]="dwdwd";  

## Objects
- 리스트안에 다양한 데이터 타입이 존재하면 각각이 무엇을 나타내는지 알아내기 어렵다.
- Objects는 각각의 데이터들이 무엇을 나타내는지 알아볼 수 있다.
- Objects 형태 ex) const player= {name: ~ , point:~ ,}
- Objects에서 새로운 데이터 추가 : player.데이터 변수명= 데이터명;

## Functions par one
- 계속 반복해서 사용할 수 있는 코드 조각
### function sayhello() { 반복되서 사용되는 코드 적용 }
- 만든 함수 사용-> sayhello();


## Functions par two
### Objects 안에 function을 넣었을경우
const player = {name: "khw",
sayhello: function (othername) {
console.log("hello! " + othername);
},
};
- player라는 Objects안에 sayhello라는 함수를 정의하였다.
- player.sayhello("lynn"); // player에서 sayhello라는 함수를 사용할 수 있다.
