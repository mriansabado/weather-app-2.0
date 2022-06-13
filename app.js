


const url='https://goweather.herokuapp.com/weather/SanDiego';

fetch(url)
.then(data=>{return data.json()})
.then(res=>console.log(res))
.catch(error=>console.log(error))

function 