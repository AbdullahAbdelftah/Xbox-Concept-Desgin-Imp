import borderlands from './borderlands.png';
import fifa from './fifa24.png';
import mine from './mine.png'
function Sec2(){
    return(
        <div className="sec2">
            <div className="sec2-part">
                <div className="pic">
                <img id='bLands' src={borderlands} alt=""/>
                </div>
                <div className='data'>
                    <h4>Borderlands 3</h4>
                    <p>Mayhem is Coming</p>
                    <p id='more'>MORE<i class="fa-solid fa-chevron-right"></i></p>
                </div>
            </div>
            <div className="sec2-part">
                <div className="pic">
                <img id='bLands' src={fifa} alt=""/>
                </div>
                <div className='data'>
                    <h4>FC24</h4>
                    <p>Football Affection</p>
                    <p id='more'>MORE<i class="fa-solid fa-chevron-right"></i></p>
                </div>
            </div>
            <div className="sec2-part">
                <div className="pic">
                <img id='bLands' src={mine} alt=""/>
                </div>
                <div className='data'>
                    <h4>Minecraft</h4>
                    <p>World Under Your Fingers</p>
                    <p id='more'>MORE<i class="fa-solid fa-chevron-right"></i></p>
                </div>
            </div>
        </div>
    );
}
export default Sec2;