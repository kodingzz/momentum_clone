const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.classList.toggle("clicked");
}

title.addEventListener("click", handleTitleClick);
