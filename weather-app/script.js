// let city = 'London';

let cityElement = document.querySelector('.city')
let tempElement = document.querySelector('.temp')
let condition = document.querySelector('.condition') 
let icon = document.querySelector('.icon') 
let body = document.body;
// ("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixid=MnwzODI4MzF8MHwxfHNlYXJjaHwxfHxsb25kb258ZW58MHx8fHwxNjY5MTQ1OTI1&ixlib=rb-4.0.3")';

function getWeather(city) {
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

let searchInput = document.querySelector('.city-input');
let searchBtn = document.querySelector('.search-btn');

searchBtn.onclick = () => {
    getWeather(searchInput.value );

    fetch(`https://api.unsplash.com/search/photos/?client_id=oegIivKo5Ppbo_PK_PedVXtGUYnhG7OhgagyKBFIQa0&query=${searchInput.value}&per_page=1`)
    .then(response => response.json())
    .then(data => body.style.backgroundImage = `url(${data.results[0].urls.regular})`)
    
    searchInput.value = '';
}

