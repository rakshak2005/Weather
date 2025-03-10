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

    if(data.weather[0].main == "Clear"){
        weth.src="./images/clear.png";
    }
    else if (data.weather[0].main == "Clouds"){
        weth.src="./images/clouds.png";
    }  

    else if (data.weather[0].main == "Drizzle"){
        weth.src="./images/drizzle.png";
    }  
    else if (data.weather[0].main == "Mist"){
        weth.src="./images/mist.png";
    }  
    else if (data.weather[0].main == "Rain"){
        weth.src="./images/rain.png";
    }  
    else if (data.weather[0].main == "Snow"){
        weth.src="./images/snow.png";
    }  


}




searchbtn.addEventListener("click", ()=>{
    weather(searchbox.value);
})

