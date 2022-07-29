
import React, { useRef } from "react";
import bootstrap from 'bootstrap'

function Weather(props) {
    
    const searchData = useRef();

    function submit(e) {
        e.preventDefault();
        
        searchData.current.value && props.cityFn(searchData.current.value);
    }

    return (
        <div className='A'>

<nav className="navbar bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex" role="search" onSubmit={submit}>
      <input className="form-control me-2" ref={searchData} type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-secondary" type="submit">Search</button>
    </form>
  </div>
</nav>
         
        </div>
    );
}
export default Weather;
