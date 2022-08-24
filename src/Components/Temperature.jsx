import React from "react";
import Bottom from "./Bottom";

function Temperature(props) {
  //console.log(props.api);
  let celceus = Math.round(props.api.main.temp - 272.15);
  let maxTemp = Math.round(props.api.main.temp_max - 272.15);
  let minTemp = Math.round(props.api.main.temp_min - 272.15);

  return (
    <div className="tem">
      <h1 className="temperature">
        {celceus}
        <span> &#8451;</span>
      </h1>
      --------------------
      <h3>{props.api.weather[0].description}</h3>
      <h4>
        {minTemp}
        <span> &#8451; </span> / {maxTemp}
        <span> &#8451; </span>
      </h4>
      <button className="btn-bucket">
        <img src="https://img.icons8.com/material-two-tone/96/000000/waterbucket.png" alt="Bit-bucket" />
      </button>
      <Bottom api={props.api} />
    </div>
  );
}

export default Temperature;
