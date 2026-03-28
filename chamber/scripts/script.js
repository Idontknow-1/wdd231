// nav
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// grid/list buttons
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('#cards');

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showlist);

function showlist() {
    display.classList.add("list");
    display.classList.remove("grid");
}

// member info
const url = 'scripts/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');

        // divs
        let headerDiv = document.createElement('div');
        let contentDiv = document.createElement('div');
        let infoDiv = document.createElement('div');
        headerDiv.className = "card-header";
        contentDiv.className = "card-content";
        infoDiv.className = "card-info";

        // name
        let name = document.createElement('h3');
        name.textContent = member.name;

        // info
        let address = document.createElement('p');
        let phone = document.createElement('p');
        address.innerHTML = `<strong>ADDRESS:</strong> ${member.address}`;
        phone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;
        
        // website
        let website = document.createElement('p');
        let websiteurl = document.createElement('a');
        let displayLink = member.website.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];
        website.innerHTML = "<strong>URL: </strong>";
        websiteurl.textContent = displayLink;
        websiteurl.setAttribute('href', member.website);
        websiteurl.setAttribute('target', '_blank');
        website.appendChild(websiteurl);

        // image
        let image = document.createElement('img');
        image.setAttribute('src', member.image);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '150');

        headerDiv.appendChild(name);

        infoDiv.appendChild(address);
        infoDiv.appendChild(phone);
        infoDiv.appendChild(website);

        contentDiv.appendChild(image);
        contentDiv.appendChild(infoDiv);

        card.appendChild(headerDiv);
        card.appendChild(contentDiv);
        cards.appendChild(card);
    });
}

getMemberData();

// weather
// key: 0ae0aac4808b55f76186bffc23b4598c
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Casa+Grande,US-AZ&units=imperial&appid=0ae0aac4808b55f76186bffc23b4598c'

async function apiFetch() {
    try{
        const response = await fetch(weatherUrl);
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
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('#weather-desc');

    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    let desc = data.weather[0].description;
    captionDesc.textContent = desc.toUpperCase();

    document.querySelector('#high').textContent = `${Math.round(data.main.temp_max)}°F`;
    document.querySelector('#low').textContent = `${Math.round(data.main.temp_min)}°F`;
    document.querySelector('#humidity').textContent = `${data.main.humidity}%`;

    const formatTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    document.querySelector('#sunrise').textContent = formatTime(data.sys.sunrise);
    document.querySelector('#sunset').textContent = formatTime(data.sys.sunset);


}

apiFetch();

// forecast
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Casa+Grande,US-AZ&units=imperial&appid=0ae0aac4808b55f76186bffc23b4598c';

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        }
    }    catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    const forecastList = document.querySelector('#forecast-list');
    forecastList.innerHTML = "";

    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyData.forEach((day, index) => {
        let p = document.createElement('p');
        p.className = 'forecast-item';

        const date = new Date(day.dt * 1000);
        let dayName = date.toLocaleDateString('en-US', { weekday: 'long'});

        if (index === 0) dayName = "Today";

        p.innerHTML = `${dayName}: <strong>${Math.round(day.main.temp)}&deg;F</strong>`;

        forecastList.appendChild(p);
    });
}

getForecast();

// footer copyright and last modified
const yearSpan = document.getElementById('currentyear');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;