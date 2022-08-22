const loginform = document.querySelector("#login-form"); // login-form id 찾기
const logininput = document.querySelector("#login-form input"); // login-form id안의 input
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  //const username = logininput.value;
  event.preventDefault(); // 어떤 event의 기본행동등(새로고침)이 발생되지 않도록 막는다.
  loginform.classList.add("hidden"); // form을 제거해주는 hidden클래스 추가
  const username = logininput.value;
  console.log(username);
  greeting.innerText = `Hello ${username}`; //greeting.innerText = "Hello " + username;
  greeting.classList.remove("hidden"); //클래스를 추가하거나 삭제할때 , classList.add, remove
}

function LinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginform.addEventListener("submit", onLoginSubmit);
