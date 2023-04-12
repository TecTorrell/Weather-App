const searchButton = document.querySelector('button')
const degree = document.querySelector('.degree')
const description = document.querySelector('.description')
const windSpeedValue = document.querySelector('.value')
const errorMessage = document.querySelector('.error__message')
const hidden = document.querySelector('hidden')
const emoji = document.querySelector('.emoji')
var descriptionText = ""

searchButton.addEventListener('click', ()=>{
    let searchBar = document.querySelector('input').value
    if (searchBar == '') {
        errorMessage.classList.remove('hidden')
    }
    else{
        errorMessage.classList.add('hidden')
        let city = document.querySelector('.city').textContent = searchBar
        fetch(`https://goweather.herokuapp.com/weather/${searchBar}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            degree.innerText = data.temperature
            description.innerText = data.description
            windSpeedValue.innerText = data.wind
            descriptionText = data.description.toLowerCase()

            switch (descriptionText){
            case "clear":
                emoji.innerText = "⭐"
                break 
            case "sunny":
                emoji.innerText = "☀️"
                break
            case "partly cloudy":
                emoji.innerText = "☁️"
                break
            case "light rain":
                emoji.innerText = "🌧️"
                break
            case "light rain shower":
                emoji.innerText = "☔"
                break
            case "light snow shower":
                emoji.innerText = "❄️"
                break
            case "patchy rain possible":
                emoji.innerText = "☔"
                break
            case "heavy rain":
                emoji.innerText = "⛈️"
                break
            case "heavy snow":
                emoji.innerText = "🌨️"
                break
            case "thunderstorm":
                emoji.innerText = "⛈️"
                break
            default:
                emoji.innerText = "🟠"
                
        }})
    
    }

})    

// Assume that the weatherData variable contains the data returned by the API call
if (typeof degree === "undefined" || typeof description === "undefined" || typeof windSpeedValue === "undefined" || typeof descriptionText === "undefined") {
//   console.log("Error: No weather data available for this location.");
    
            degree.innerText = "Data could not be fetched"
            description.innerText = "Data could not be fetched"
            windSpeedValue.innerText = "Data could not be fetched"
            descriptionText = "Data could not be fetched"
} else {
    
}



























// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4fee49b26amsh03cd7e91ceafab6p1c6f00jsncf77259865d7',
// 		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
// 	}
// };

// fetch('https://forecast9.p.rapidapi.com/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4fee49b26amsh03cd7e91ceafab6p1c6f00jsncf77259865d7',
// 		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
// 	}
// };

// fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=9.082&lon=8.6753', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
