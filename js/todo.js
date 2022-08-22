const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
// const todoInput =document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function handleTodoSubmit(event) {
  event.preventDefault();
  const newtodo = todoInput.value;
  todoInput.value = ""; // input value값이 비워지기전에 newtodo에 값이 저장됨.
  console.log(newtodo);
  PaintTodo(newtodo);
}

function PaintTodo(newtodo) {
  // input에 적은 값을 list에 추가해주는 함수
  const li = document.createElement("li"); // li 태그 생성
  const span = document.createElement("span"); // span 태그 생성

  span.innerText = newtodo; // span안에 input값을 넣는다.
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", DeleteTodo);
  li.appendChild(span); // li 안에 span을 넣는다.
  li.appendChild(button);

  //console.log(li);
  todoList.appendChild(li); // todo List에 list item들을 추가한다.
}

function DeleteTodo(event) {
  // console.dir(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
}

todoForm.addEventListener("submit", handleTodoSubmit);
