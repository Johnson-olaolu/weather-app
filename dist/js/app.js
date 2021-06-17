let search_button = document.getElementById("search")
let search_input = document.getElementById("input-search")
let weather_div = document.querySelector(".weather-div")

search_button.addEventListener("click", searchFunction)

async function searchFunction () {
    let weatherData = {}
    let search_value = search_input.value
    let img_template = document.querySelector('.weather-img')
    let name_template = document.querySelector(".name")
    let weatherDescription_template = document.querySelector(".weather-description span")
    let temp_template = document.querySelector(".weather-temp span")
    let visibility_template = document.querySelector(".weather-visibility span")
    let wind_template = document.querySelector(".weather-wind span")
    //let name_template = document.querySelector(".name")

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search_value}&appid=11a938b6104da22141ecd176f38d92d2`)
    .then(res => res.json())
    .then(res => {
        weatherData = res
        let name = weatherData.name
        let weatherDescription = weatherData.weather[0].description
        let weatherImg = weatherData.weather[0].icon
        let temp = weatherData.main.temp
        temp = temp - 273.15
        let windspeed = weatherData.wind.speed
        let windDeg = weatherData.wind.deg
        let windGust = weatherData.wind.gust
        let visibility = weatherData.visibility
        console.log(weatherData)

        // console.log({weatherDescription, temp, windspeed, windGust, windDeg, name ,
        // visibility})

        img_template.src = `http://openweathermap.org/img/wn/${weatherImg}@2x.png`
        name_template.innerText = name
        weatherDescription_template.innerText = weatherDescription
        temp_template.innerText = temp
        visibility_template.innerText = visibility
        wind_template.innerText = `Speed (${windspeed}) , Degree (${windDeg}) , Gust (${windGust})`
        weather_div.style.display= "block"
    })
}


