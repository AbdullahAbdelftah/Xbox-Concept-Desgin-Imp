import controller from './controller.png';

function Sec1(){
    return(
        <div className='sec1'>
            <div className='slogan'>
                <h1>Games Play best On Xbox One</h1>
                <p>Play over <b>1300 games</b> on the only consoles designed to play the best games of the past,present, and future. </p>
                <button id='learn'>Learn More</button>
            </div>
            <div>
            <img id='control' src={controller} alt=""/>
            
            </div>
        </div>
    );
}
export default Sec1;