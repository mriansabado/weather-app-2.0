


const url='https://goweather.herokuapp.com/weather/Maui';

fetch(url)
.then(data=>{return data.json()})
.then(res=>console.log(res['description']))
.catch(error=>console.log(error))

