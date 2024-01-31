import vid from './vid.mp4';
import React from 'react';
function Sec3(){
    return(
        <div className="sec3">
            <video src={vid} autoPlay loop muted className="background-video" />
            <div id='fifa-data'>
            <p id='dot'>Console <i class="fa-solid fa-circle fa-2xs"></i> PC <i class="fa-solid fa-circle fa-2xs"></i> Cloud</p>
            <h1>EA FC24</h1>
            <h2>Feel the reality of football through your console</h2>
            <button>GET IT NOW</button>
            </div>
        </div>
    );
}
export default Sec3;