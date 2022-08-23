function onGeoOk(position) {
  // 사용자위치 알아냈을때 함수
  console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in ", lat, lng);
}

function onGeoError() {
  // 사용자위치 못알아냈을때 함수
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 현재 사용자의 위치를 알려준다.  getcurrentposition(성공시 함수, 실패시 함수)
