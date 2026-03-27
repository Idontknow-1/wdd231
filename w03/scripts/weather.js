// select html elements
const town = document.querySelector('#town');
const desc = document.querySelector('#description');
const temp = document.querySelector('#temperature');
const graphic = document.querySelector('#graphic');

// variables for the url
const key = "0ae0aac4808b55f76186bffc23b4598c"
const lat = "49.74931336463975"
const long = "6.637624291514864"

const url = '//api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=0ae0aac4808b55f76186bffc23b4598c'

// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=0ae0aac4808b55f76186bffc23b4598c'

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello');
    town.innerHTML = data.name;
    desc.innerHTML = data.weather[0].description;
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    graphic.setAttribute('src', iconsrc);
    graphic.setAttribute('alt', data.weather[0].description);
}

// function displayResults(data) {
//     currentTemp.innerHTML = `${data.main.temp}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = data.weather[0].desription;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = `${desc}`;
// }

apiFetch();