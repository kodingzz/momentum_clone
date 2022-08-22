const clock = document.querySelector("#clock");

clock.innerText = "00:00";

function sayhello() {
  console.log("hello");
}

setInterval(sayhello, 3000);
