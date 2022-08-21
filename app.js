const loginform = document.querySelector("#login-form"); // login-form id 찾기
const logininput = document.querySelector("#login-form input"); // login-form id안의 input

function onLoginSubmit(event) {
  //const username = logininput.value;
  event.preventDefault(); // 어떤 event의 기본행동등(새로고침)이 발생되지 않도록 막는다.
  console.log(logininput.value);
}

loginform.addEventListener("submit", onLoginSubmit);
