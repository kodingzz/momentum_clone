// const loginform = document.querySelector("#login-form"); // login-form id 찾기
const logininput = document.querySelector("#login-form input"); // login-form id안의 input
const loginbutton = document.querySelector("#login-form button"); // login-form id안의 button

function onLoginButton() {
  const username = logininput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long!");
  } else {
    console.log("hello " + logininput.value); // value는 input의 입력값
  }
}

loginbutton.addEventListener("click", onLoginButton);
