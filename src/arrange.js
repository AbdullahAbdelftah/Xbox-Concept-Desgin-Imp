function Arrange(props){
    return(
        <div className={props.className}>
            <div className="prodData">
                <h1>{props.title}</h1>
                <br/>
                <h2>{props.slogan}</h2>
                <button id="getNow">GET IT NOW</button>
            </div>
            <img src={props.src} alt=""/>
        </div>
    );
}
export default Arrange;