const title = document.querySelector(".hello h1");

console.dir(title);

function handleTitleClick() {
  console.log("Title was clicked");
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.innerText = "Mouse is come!";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("No Wifi");
}
function handleWindowOnline() {
  alert("Wifi is here!");
}
title.addEventListener("click", handleTitleClick);

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize); // 화면크기 변경시
window.addEventListener("copy", handleWindowCopy); // 사용자가 ctrl+c 하면 alert(경고문)
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
