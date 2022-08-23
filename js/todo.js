const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
// const todoInput =document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let todoS = []; // 이전요소 +새 요소들을 넣을때 덮어지지않기 위해 let변수 사용

function handleTodoSubmit(event) {
  event.preventDefault();
  const newtodo = todoInput.value; // 입력값이 비워지기전에 newtodo에 값을 저장함.
  todoInput.value = ""; // 입력값을 비운다.
  console.log(newtodo);
  const newtodoObj = {
    // 입력값 각각에 랜덤한 id를 주어서 요소를 삭제했을때  id를 이용해 데이터베이스에서도 삭제한다.
    text: newtodo,
    id: Date.now(), // 랜덤한 값 출력
  };
  todoS.push(newtodoObj); //  리스트에 입력값(id,text)을 추가한다.(push)
  PaintTodo(newtodoObj); // 입력값을 화면상에 그린다.(paint)
  SaveTodos(); //  입력값을  local storage에 저장한다.
}

function SaveTodos() {
  // localstorage에 저장하는 함수
  localStorage.setItem("toDos", JSON.stringify(todoS)); // localstorage에  저장할때 String형태로 변환
}

function PaintTodo(newtodo) {
  //newtodo는 Object
  // input에 적은 값을 list에 추가해주는 함수
  const li = document.createElement("li"); // li 태그 생성
  const span = document.createElement("span"); // span 태그 생성
  li.id = newtodo.id; // newtodo의 id,text중 id를 list id로 추가한다.
  span.innerText = newtodo.text; // Object안의 text를 span에 넣는다.
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

  todoS = todoS.filter((item) => item.id !== parseInt(li.id));
  //요소삭제시 클릭한 li의 id와 todoS의 id가 같지 않다면 새로운 배열에 유지되어 출력됨.
  SaveTodos(); // 새로운 배열을  localstorage에 저장
}
/*
function sexyfilter(item) {
  return item !== 3; //  item이 3이면 배열에세 제외
}
[1, 2, 3, 4].filter(sexyfilter); // 새로운 배열에 1,2,4 만 출력됨
*/

todoForm.addEventListener("submit", handleTodoSubmit);

const savedtoDos = localStorage.getItem("toDos");
console.log(savedtoDos); // String 형태
if (savedtoDos != null) {
  const parsedtoDos = JSON.parse(savedtoDos); // String->arry 형태로 변환
  todoS = parsedtoDos; // 새로운 요소를 추가하기 이전의 요소들이 배열에 있게한다.
  parsedtoDos.forEach(PaintTodo); // 새로고침해도 localstorage에 있던 각각의 요소들을 가져온다.
}
