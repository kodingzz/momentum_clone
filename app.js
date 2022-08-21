const title = document.querySelector(".hello h1");

console.dir(title); // console.log(title);

function handleTitleClick() {
  const currentcolor = title.style.color;
  let newcolor;
  if (currentcolor === "blue") {
    newcolor = "tomato";
  } else {
    newcolor = "blue";
  }
  title.style.color = newcolor;
  console.log(newcolor);
}

title.addEventListener("click", handleTitleClick);
