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
- Objects 형태 ex) const player= {name: ~ , point:~ ,}  //player.name, player,point
- console또한 Objects라는 사실
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

## Returns
- return에 의해서 function안의 값의 결과를 밖에서 새로운 변수로 받아 사용할 수 있다.
### ex
const age = 23;
function calculatorkrage(ageofForeigner) {
return ageofForeigner + 2;
}
const krage = calculatorkrage(age);
console.log(krage);
- return을 하면 function은 작동을멈추고 결과값을 return하고 끝낸다.

## Conditionals 
### 조건(if)
- prompt() : 코드의 진행을 멈추게한다.
- type of : 변수의 type(number,string..)을 알 수 있다.
- parseInt : string -> number로 type 변환

## Conditionals part Two
### 조건문 형태
if() {
console.log(...);
}
else {
console.log(..);
}
## Conditionals part Three
- && : and 기호
- || : or 기호

## The Document Object
- document는 web site를 의미한다.
- js는 html과 연결되어 있으므로 js로 html항목을 가져올 수 있다.


## HTML in Javascript
- html에서 항목을 가져온후 js를 통해 변경한다.

### js로 가져오는 방법
- const title = document.getElementById("title");       // html의 id를통해 찾는다.
- document.querySelector("#hello")  
- js에서 html element를 가져오는데 대부분 querySelector를 사용한다.  
  - ex) const title = document.querySelector(".hello h1");    // hello 클래스의 h1태그 하나를 가져온다.
  - ex) const title = document.querySelectorAll(".hello h1");    // hello 클래스안에 h1 태그가 여러줄인 경우 배열형태로 가져온다.
  
##  Events
- 사용자의 어떠한 행동 ex) click
- ex) title.addEventListener("click", handleTitleClick); 
  - click이라는 event가 발생하면 듣고 js가 handleTitleClick 함수 버튼을 누른다.
  - function handleTitleClick() { title.innerText = "Click me!";  title.style.color = "blue"; }
## Events part Two
- 다양한 event들이 있다. ex) click, mouseEnter, mouseLeave. ..
- title.addEventListener("mouseenter", handleMouseEnter); 
    - 사용자가 제목에 마우스를 갖다대면 handleMouseEnter 함수를 실행시킨다.
## More Events
- document.body(head,title) 정도의 중요한 내용만 쓸 수 있다. ( document.div (x) )
### window와 관련된 events
- resize : 화면크기 변경 할때
- copy : 무언가를 복사할때
- offline, online : wifi 연결/비연결시
## CSS in Javascript=
### js에서 event 이용하기
1)element를 찾기
2) event를 listen
3) event에 반응하기(보여주거나 감추거나 클릭하는것) - 함수 안
## CSS in Javascript part Two 
- js는 html을 변경하고, css는 html을 바라보고 있다.
## CSS in Javascript part Three
const clickedClass = "clicked"; // clicked는 클래스명
if (title.classList.contains(clickedClass)) {
title.classList.remove(clickedClass); // class 에서 clickedClass를 제거한다.
} else {
title.classList.add(clickedClass); // class에서 clickedClass를 추가한다.
}
### add와 remove를 해주는 함수 -> toggle
- title.classList.toggle("clicked"); // clicked가 없으면 classList에 추가, 있으면 제거

##  Input Values 
const logininput = document.querySelector("#login-form input"); // login-form id안의 input
const loginbutton = document.querySelector("#login-form button"); // login-form id안의 button
function onLoginButton() {
console.log(logininput.value); // value는 input의 입력값
}
loginbutton.addEventListener("click", onLoginButton);  // input의 value값을 입력하고 버튼누르면 콘솔에 입력값출력

##  Form Submission
- form 안의 속성에는 required(필수), maxlength , type, placeholder 등이있다.
- input 밖을 form으로 감싸면 따로 조건문을 주지않아도 html이 최대길이, 빈칸등을 잡아준다.
- 문제는 버튼을 클릭할때 자동으로 submit(새로고침)된다는 것

##  Events
function onLoginSubmit(event) {
event.preventDefault(); // 어떤 event의 기본행동등(새로고침)이 발생되지 않도록 막는다.
console.log(logininput.value);
}
loginform.addEventListener("submit", onLoginSubmit);
##  Events part Two
- js는 함수를 실행시키는 동시에 그 함수에 첫번째 인자에 object를 넣어준다. object에는 방금 일어난 event에 대한 여러정보가 담겨있다.
- addEventListner 안에 있는 함수는 직접 실행하지 않는다. 브라우저가 해준다. 브라우저는 이벤트에 대한 정보도 가지고 있다.
- link의 기본동작은 클릭시 다른 사이트로 넘어가는것이다. preventDefault() 를 이용해 link의 기본동작을 막을 수 있다.
