const apiKey = {
    key: "62715d8105c316b2c19f1b51a01dd879",
    baseurl: "https://api.openweathermap.org/data/2.5/",
}
//weather?zip=



const searchbox = document.querySelector('.searchBox');
searchbox.addEventListener('keypress', setQuery);

//searchButton.addEventListener('onClick', setQuery);

/* object.onclick = function(){
    searchbox.addEventListener('onclick', setQuery);
} */

function setQuery(evt) {
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query){
    fetch(`${apiKey.baseurl}weather?zip=${query}&units=imperial&APPID=${apiKey.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}
 



function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}`;

    /*let timeNow = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(timeNow);*/

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round((weather.main.temp)).toFixed(0)}<span>°F</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let highLow = document.querySelector('.current .highLow');
    highLow.innerText = "High " + `${Math.floor(weather.main.temp_max)}°F/Low ${Math.floor(weather.main.temp_min)}°F`;
    
    const timeStamp = moment();
    console.log(timeStamp);

    let dayWeek = document.querySelector('.dayWeek');
    let todaysDate = document.querySelector('.todaysDate');
    let currentTime = document.querySelector('.timeStone');
    console.log(dayWeek);
    dayWeek.innerText = timeStamp.format('dddd');
    todaysDate.innerText = timeStamp.format('MMMM Do, YYYY');

    let longitude = weather.coord.lon;
    let latitude = weather.coord.lat;
    console.log(longitude);
    console.log(latitude);

    $.get(`https:api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey.key}&units=imperial`, ((data2)=>{
        let localTime = moment().tz(data2.timezone).format('h:mm a z');
        currentTime.innerText = localTime;
 }))
    //onecall?lat={lat}&lon={lon}&appid={YOUR API KEY}
    
    
}

    /* var date = momentTZ().format('MMM DD, YYYY');
    let dateStone = document.querySelector('.location .date');
    todaysDate.innerText = 'date'; */
    


/* function dateBuilder (d) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dayOfTheWeek = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
    let day = dayOfTheWeek[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonths()];
    let year = d.getFullYear();

    let currentDay = document.querySelector('.current .day');

    return `${day} ${date} ${month} ${year}`;
} */