
let cityElement = document.querySelector('.city')
let tempElement = document.querySelector('.temp')
let condition = document.querySelector('.condition') 
let icon = document.querySelector('.icon') 

// weather
export function getWeather(city) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=255a1357a918444db9a174353222211&q=${city}`)
    .then(response => response.json())
    // .then(data => console.log(data ));
    .then(data => {
        console.log(data )
        cityElement.innerText = data.location.name 
        tempElement.innerHTML = data.current.temp_c + '&#x2103'
        condition.innerText = data.current.condition.text
        icon.src = data.current.condition.icon
    }).finally(()=> icon.hidden = false );
}


// bg
let body = document.body;

export function getWallpaper(city) {

    fetch(`https://api.unsplash.com/search/photos/?client_id=oegIivKo5Ppbo_PK_PedVXtGUYnhG7OhgagyKBFIQa0&query=${city}&per_page=20`)
    .then(response => response.json())
    .then(data => body.style.backgroundImage = `url(${data.results[Math.random().toFixed(1)*20].urls.regular})`)
}

// default city

export function getDefault(city) {
    getWeather(city);
    getWallpaper(city);
}
