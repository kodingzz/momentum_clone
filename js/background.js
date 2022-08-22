const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenimage = images[Math.floor(Math.random() * images.length)]; //imges에서 random하게 출력

//console.log(chosenimage);

const bgimg = document.createElement("img"); // html을 위한 img태그를 js에서 만들 수 있다.

bgimg.src = `img/${chosenimage}`; // string과 변수를 연결해주는 방법
document.body.appendChild(bgimg); //3. html body에 bgimg를 추가해준다.

// 결과적으로 html에  <img src="img/1.jpeg">
