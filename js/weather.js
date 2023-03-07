const API_KEY = "f252f600a8322aeb2c8aeb9abdc4d37f"

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = data.weather[0].main;
    });
}

function onGeoError(){
    alert("위치를 알 수 없어, 날씨 정보를 제공하지 못하였습니다.");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
