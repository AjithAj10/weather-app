import React, { useEffect, useState } from 'react';
import Weather from './Components/Weather';
import axios from 'axios';
import './App.css';

function App() {
  const [city,setCity] = useState('London');


  let latitude;
       let longitude;

       useEffect(() => {

         getWeatherData();
        },[])

function getWeatherData () {
      //https://geocoding-api.open-meteo.com/v1/search?name=Berlin

  axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`).then(res => {
      
      //console.log(res.data);
       latitude = res.data.results[0].latitude;
       longitude = res.data.results[0].longitude;

       wdata(latitude,longitude)
 
      })

}

let data;

const wdata = async(latitude,longitude) => {
let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloudcover&daily=temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum&current_weather=true&timezone=Asia%2FSingapore`);
data = await res.json();
//console.log(data.daily[0]);
console.log(data);
//console.log(data.current_weather);

//props.data(data);
}

  return (
    <div className="App">
       
    </div>
  );
}

export default App;
