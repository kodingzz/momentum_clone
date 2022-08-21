// const loginform = document.querySelector("#login-form"); // login-form id 찾기
const logininput = document.querySelector("#login-form input"); // login-form id안의 input
const loginbutton = document.querySelector("#login-form button"); // login-form id안의 button

function onLoginButton() {
  const username = logininput.value;
  console.log(username);
}

loginbutton.addEventListener("click", onLoginButton);
