

navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
})
let a = Object();

const key = 'ad1593fa346cb5a187f4f973e21e42c8';
async function success({ coords }) {
    const { latitude, longitude } = await coords;
    const position = [latitude, longitude];
    console.log(position);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
    .then(resp => resp.json())
    .then(data => {
        a.city = data.name;
        a.temp = Math.round(data.main.temp - 273);
        a.dt = data.dt;
        console.log(a);
    })

  }
  function error({ message }) {
    console.log(message);
  }

  export default a;