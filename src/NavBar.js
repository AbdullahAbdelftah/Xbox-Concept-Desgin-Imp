import xbox from './xbox.png';
import micro from './micro.png';

function NavBar(){
    return(
      <div className="navbar">
        <div id='m'>
        <img id='micro' src={micro} alt=""/>
        <img id='logo' src={xbox} alt=""/>
        </div>
        <div className='dp'>
            <div className='log'>
                Consoles
                <i id='drop' class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='list'>
                <p>Xbox 360</p>
                <p>Xbox Series X</p>
                <p>Xbox Series S</p>
            </div>
        </div>
        <div className='dp'>
            <div className='log'>
                Games
                <i id='drop' class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='list'>
                <p>Shop all console games</p>
                <p>PC Games</p>
                <p>PC Game pass</p>
            </div>
        </div>
        <div className='dp'>
            <div className='log'>
                Community
                <i id='drop' class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='list'>
                <p>Xbox Community</p>
                <p>Xbox News</p>
                <p>Sustainability</p>
            </div>
        </div>
        <div className='dp'>
            <div className='log'>
                Accessories
                <i id='drop' class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='list'>
                <p>VR</p>
                <p>Motion Detector</p>
                <p>Camera</p>
            </div>
        </div>
        <div id='search-all'>
        <input id='search-bar' type="text" placeholder='Search' />
        <button id='glass-btn'><i id='glass' class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <button id='user-btn'><i id='user' class="fa-solid fa-user"></i></button>
      </div>  
    );
}
export default NavBar;