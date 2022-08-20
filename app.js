const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("Title was clicked");
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
