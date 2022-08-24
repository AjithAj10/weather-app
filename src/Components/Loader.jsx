import React from 'react';

function Loader(props) {
    return (
        <div>
              <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
    </div>
        </div>
    );
}

export default Loader;