
import React, {  useState } from "react";

function Weather(props) {
    
    const [searchData,setData] = useState();

    function submit(e) {
        e.preventDefault();
        
        searchData && props.cityFn(searchData);
        setData('');

    }

    return (
        <div className='A'>

    <form className="d-flex" role="search" onSubmit={submit}>
      <input className="form-control me-2" value={searchData} onChange={(e)=> setData(e.target.value)} type="search" placeholder="Search City" aria-label="Search"/>
    </form>
  
         
        </div>
    );
}
export default Weather;
