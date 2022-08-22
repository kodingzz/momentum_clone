const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
// const todoInput =document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function handleTodoSubmit(event) {
  event.preventDefault();
  const newtodo = todoInput.value;
  todoInput.value = ""; // input value값이 비워지기전에 newtodo에 값이 저장됨.
  console.log(newtodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
