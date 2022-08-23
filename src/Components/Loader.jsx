import React from 'react';

function Loader(props) {
    return (
        <div>
              <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <span>Loading</span>
    </div>
        </div>
    );
}

export default Loader;