function weatherApp(event) {
var x = event.key
if (x == 'Enter') { 
    var lat; var lon; var errorMessage; var icon;
    var cityName = document.getElementById('city').value;
    const apiKey = 'e4d55f36268c8d59c9cc7029d1797821'
    const latitudeAndLongitudeUrl =`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
    var city = document.getElementById('city');
    city.value = "";
    city.setAttribute("placeholder","City name...")
   
    //For longitude and latitude
    fetch(latitudeAndLongitudeUrl).then(function(response){
        return response.json()
    }).then(function(data){
    lat = (data[0].lat)
    lon = (data[0].lon)
    var text = document.getElementById('text');
    text.innerHTML = data[0].name;
    //For weather
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        var temp = (data.main.temp - 273.15).toFixed(2)
        var tempSpace = document.getElementById('tempSpace');
        var textSpace = document.getElementById('textSpace');
        tempSpace.innerHTML =`${temp}&deg;C`
        textSpace.innerHTML =`${data.weather[0].description}`
        console.log(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        var imageLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        icon= document.getElementById('icon');
        icon.setAttribute("src",imageLink)
    })
    
    }).catch((error) => {
        errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = "Put in a valid city";
        text.innerHTML=""
      });
  }
}
var input = document.getElementById('city');
input.addEventListener('keypress',function(){
    errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = "";
})
//sunny, cloudy, windy, rainy, and stormy

