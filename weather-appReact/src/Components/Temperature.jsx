import React from 'react';

function Temperature(props) {
    console.log(props.api);
    let celceus = Math.round( (props.api.main.temp) - 272.15 );
    let maxTemp = Math.round( (props.api.main.temp_max) - 272.15 )
    let minTemp = Math.round( (props.api.main.temp_min) - 272.15 )

    return (
        <div className='tem'>
            <h2>{celceus}<span> &#8451;</span></h2>
   
            <h2>Pressure : {props.api.main.pressure}<span> </span></h2>
          
            <h2>Humidity : {props.api.main.humidity}<span> </span></h2>
           
            <h2>Max : {maxTemp}<span> &#8451; </span></h2>
            <h2>Min : {minTemp}<span> &#8451; </span></h2>
            <h2>Wind Speed: {props.api.wind.speed}</h2>
            <h2>Weather: {props.api.weather[0].description}</h2>
        
        </div>
    );
}

export default Temperature;