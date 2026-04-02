export async function initWeather() {
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

    await apiFetch();
    await getForecast();
}