const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
// const todoInput =document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const todoS = [];

function handleTodoSubmit(event) {
  event.preventDefault();
  const newtodo = todoInput.value;
  todoInput.value = ""; // input value값이 비워지기전에 newtodo에 값이 저장됨.
  console.log(newtodo);
  todoS.push(newtodo); //  리스트에 입력값을 추가한다.
  PaintTodo(newtodo); // 입력값을 화면상에 그린다.(paint)
  SaveTodos(); //  입력값을  local storage에 저장한다.
}

function SaveTodos() {
  localStorage.setItem("toDos", JSON.stringify(todoS)); // localstorage에  저장할때 배열의 형태로 저장(덮어쓰기 가능)
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
  const li = event.target.parentElement; // target 은 button이다. button의 부모는 li
  li.remove(); // 클릭된 button의 부모 li를 제거하면 버튼이 제거된다. +text도 제거
}

todoForm.addEventListener("submit", handleTodoSubmit);
