const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
// const todoInput =document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const todoS = [];

function handleTodoSubmit(event) {
  event.preventDefault();
  const newtodo = todoInput.value; // 입력값이 비워지기전에 newtodo에 값을 저장함.
  todoInput.value = ""; // 입력값을 비운다.
  console.log(newtodo);
  todoS.push(newtodo); //  리스트에 입력값을 추가한다.(push)
  PaintTodo(newtodo); // 입력값을 화면상에 그린다.(paint)
  SaveTodos(); //  입력값을  local storage에 저장한다.
}

function SaveTodos() {
  // localstorage에 저장하는 함수
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
  // list를 삭제해주는 함수
  // console.dir(event.target.parentElement);
  const li = event.target.parentElement; // target 은 button이다. button의 부모는 li
  li.remove(); // 클릭된 button의 부모 li를 제거하면 버튼이 제거된다. +text도 제거
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedtoDos = localStorage.getItem("toDos");
console.log(savedtoDos); // String 형태
if (savedtoDos != null) {
  const parsedtoDos = JSON.parse(savedtoDos); // String->arry 형태로 변환
  console.log(parsedtoDos);
  pasrsedtoDos.forEach((item) => console.log("hello " + item)); // arrow function
}
