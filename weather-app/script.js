import {getWeather,getWallpaper,getDefault } from './get-weather.js'


getDefault('Beverley');

let searchInput = document.querySelector('.city-input');
let searchBtn = document.querySelector('.search-btn');

searchBtn.onclick = () => {
    getWeather(searchInput.value );
    getWallpaper(searchInput.value)

    // searchInput.value = '';
}

