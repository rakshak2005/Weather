const apiurl="https://api.openweathermap.org/data/2.5/weather?&appid=f39c946c8f6978f7474c6b5fbf302245&units=metric&q=";
const searchbox = document.querySelector("input");
const searchbtn = document.querySelector(".search button");
const weth = document.querySelector(".weth img");
async function weather(city){
    const response= await fetch(apiurl+city);
    var data = await response.json();
    console.log(data);
    document.querySelector("h2").innerHTML = data.name;
    document.querySelector("h1").innerHTML = Math.round(data.main.temp)+"°c" ;
    document.querySelector(".coun").innerHTML = data.sys.country;
    document.querySelector(".ws").innerHTML = Math.round(data.wind.speed)+" k/h";
    document.querySelector(".hu").innerHTML = Math.round(data.main.humidity)+" %";
    document.querySelector(".tm").innerHTML = Math.round(data.main.temp_max)+"°c ";
    document.querySelector(".tmin").innerHTML = Math.round(data.main.temp_min)+"°c ";
    document.querySelector(".pn").innerHTML = Math.round(data.main.pressure);
    document.querySelector(".p").innerHTML = Math.round(data.main.feels_like)+"°c";
    console.log(data.weather[0].main);

    if(data.weather[0].main = "clear"){
        weth.src="./images/clear.png";
    }
    else if (data.weather[0].main = "clouds"){
        weth.src="./images/clouds.png";
    }  

    else if (data.weather[0].main = "drizzle"){
        weth.src="./images/drizzle.png";
    }  
    else if (data.weather[0].main = "mist"){
        weth.src="./images/mist.png";
    }  
    else if (data.weather[0].main = "rain"){
        weth.src="./images/rain.png";
    }  
    else if (data.weather[0].main = "snow"){
        weth.src="./images/snow.png";
    }  


}




searchbtn.addEventListener("click", ()=>{
    weather(searchbox.value);
})

