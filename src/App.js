import React, { useEffect, useState } from "react";
import Weather from "./Components/Weather";
import axios from "axios";
import { images } from "./images";
import "./App.css";
import Temperature from "./Components/Temperature";
import Loader from "./Components/Loader";

function App() {
  const [city, setCity] = useState();
  const [api, setApi] = useState();
  const [bg, setBg] = useState(images.london);

  // const Api_Key = 'f0148d1cae9e62c70aef0ccd20c2e9bd';

  useEffect(() => {
    let latitude;
    let longitude;
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
        setCity("Mumbai");
      }
    }

    function showPosition(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      wdata(latitude, longitude);
    }

    if (!city) {
      getLocation();
    } else {
      setApi("");
      getWeatherData();
    }

    switch (city?.toLowerCase()) {
      case "london":
        setBg(images.london);
        break;
      case "usa":
        setBg(images.usa2);
        break;
      case "china":
        setBg(images.china);
        break;
      case "delhi":
        setBg(images.mumbai);
        break;
      case "mumbai":
        setBg(images.mumbai);
        break;
      case "palakkad":
        setBg(images.rain);
        break;
      default:
        setBg(images.rain);
        break;
    }
    function getWeatherData() {
      try {
        axios
          .get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.results) {
              latitude = res.data.results[0].latitude;
              longitude = res.data.results[0].longitude;
            } else {
              alert("City not found");
              setCity("");
              getLocation();
              return;
            }

            wdata(latitude, longitude);
          });
      } catch (error) {
        console.log(error);
        alert("City not found");
        return;
      }
    }

    const wdata = async (latitude, longitude) => {
      // OpenWeather Api
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f0148d1cae9e62c70aef0ccd20c2e9bd`
      );

      if (!city) {
        setCity(res.data.name);
      }
      setApi(res.data);
    };
  }, [city]);

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="main container">
        <Weather cityFn={setCity} />
        <h6>WEATHER APP</h6>
        <h1 className="title">{city?.toUpperCase()}</h1>
        {api ? <Temperature api={api} /> : <Loader />}
      </div>
    </div>
  );
}

export default App;
