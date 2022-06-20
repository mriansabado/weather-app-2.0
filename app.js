const url = "https://goweather.herokuapp.com/weather/oregon";

fetch(url)
.then(response => respsonse.json())
.then(data => console.log(data));