import React, { useEffect, useState } from 'react';
import Weather from './Components/Weather';
import axios from 'axios';
import { images } from './images';
import './App.css';
import Temperature from './Components/Temperature';

function App() {
  const [city,setCity] = useState('London');
  const [api,setApi] = useState();
  const [bg,setBg] = useState(images.london);


// const Api_Key = 'f0148d1cae9e62c70aef0ccd20c2e9bd';
  let latitude;
       let longitude;

       useEffect(() => {

         getWeatherData();

         switch(city.toLowerCase()){
            case 'london': setBg(images.london);
            break;
            case 'usa': setBg(images.usa2);
            break;
            case 'china': setBg(images.china);
            break;
            case 'delhi': setBg(images.mumbai);
            break;
            case 'mumbai': setBg(images.mumbai);
            break;
            case 'palakkad': setBg(images.rain);
            break;
            default: setBg(images.rain);
            break;
         }
         console.log(city);
         console.log(bg);

        },[city])

function getWeatherData () {
    
    
  axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`).then(res => {
      
      //console.log(res.data);
       latitude = res.data.results[0].latitude;
       longitude = res.data.results[0].longitude;

       wdata(latitude,longitude)
 
      })

}



const wdata = async(latitude,longitude) => {

   // OpenWeather Api
let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f0148d1cae9e62c70aef0ccd20c2e9bd`)


// let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloudcover&daily=temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum&current_weather=true&timezone=Asia%2FSingapore`);
// let data = await res.json();
console.log(res.data);

 setApi(res.data);

}

  return (
    <div className="App" style={{ backgroundImage:`url(${bg})`}}>
       <Weather cityFn={setCity}/>
   <div className='main container'>

     <h1>{city.toUpperCase()}</h1>
     <h2>Temperature</h2>
     {
       api && <Temperature api={api}/> 
      }
       
      </div>
    </div>
  );
}

export default App;
