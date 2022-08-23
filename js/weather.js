const API_KEY = "5108cbfd28af500f73626a15d80ce50e"; // openweathermap api key
function onGeoOk(position) {
  // 사용자위치 알아냈을때 함수
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(
    (
      response // 더 자세히 알고싶으면 백엔드 js를 들어야함
    ) =>
      response.json().then((data) => {
        // data에 내 현재위치의 모든것이 들어있다.
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = data.weather[0].main; // 현재 내위치의 날씨정보 가져오기
        city.innerText = data.name; // 현재 내 위치의 도시이름 가져오기
      })
  );
}

function onGeoError() {
  // 사용자위치 못알아냈을때 함수
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 현재 사용자의 위치를 알려준다.  getcurrentposition(성공시 함수, 실패시 함수)
