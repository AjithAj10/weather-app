import React from "react";

function Bottom(props) {
  return (
    <div className="btm-holder">
      <div className="section">
      <img src="https://img.icons8.com/color/48/000000/wind.png" alt="wind"/>
              <h2>{props.api.wind.speed} m/s</h2>
      </div>
      <div className="section">
        <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/pressure.png" alt="pressure"/>
        <h2>{props.api.main.pressure} hpa</h2>
      </div>
      <div className="section">
        <img src="https://img.icons8.com/color/96/FFFFFF/dew-point.png" alt="humidity"/>
        <h2>{props.api.main.humidity} g/kg</h2>
      </div>
    </div>
  );
}

export default Bottom;
