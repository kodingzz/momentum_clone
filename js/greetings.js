const loginform = document.querySelector("#login-form"); // login-form id 찾기
const logininput = document.querySelector("#login-form input"); // login-form id안의 input
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //const username = logininput.value;
  event.preventDefault(); // 어떤 event의 기본행동등(새로고침)이 발생되지 않도록 막는다.
  loginform.classList.add("hidden"); // form을 제거해주는 hidden클래스 추가
  const username = logininput.value;
  console.log(username);
  paintgreetings(username); // input에 입력한  username을 가져온다.
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintgreetings(username) {
  // 두 문장이상이 겹치는 경우 함수로 만들어서 사용하는게 편함
  greeting.innerText = `Hello ${username}`; //greeting.innerText = "Hello " + username;
  greeting.classList.remove("hidden"); //클래스를 추가하거나 삭제할때 , classList.add, remove
}

if (savedUsername === null) {
  console.log(savedUsername);
  loginform.classList.remove("hidden");
  loginform.addEventListener("submit", onLoginSubmit);
} else {
  console.log(savedUsername);
  paintgreetings(savedUsername); // localstorage에서  username을 가져온다.
}
