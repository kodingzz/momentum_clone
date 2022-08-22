const clock = document.querySelector("#clock");

//function sayhello() {
//console.log("hello");
//}

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; //00:00:00
}

getClock();
setInterval(getClock, 1000); // 특정함수를 3초에 한번씩 반복한다.

//setTimeout(sayhello, 3000);
