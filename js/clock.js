const clock = document.querySelector("#clock");

//function sayhello() {
//console.log("hello");
//}

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${second}`; //00:00:00
}

getClock();
setInterval(getClock, 1000);
//setTimeout(sayhello, 3000);
