import Part from "./footPart";
function Foot(){
    return(
        <div className="foot">
            <div className="footContainer">
                <Part title={"Browse"} i1={"Xbox consoles"} i2={"Xbox games"} i3={"Xbox Game Pass"}  i4={"Xbox accessories"}/>
                <Part title={"Resources"} i1={"Xbox News"} i2={"Xbox Support"} i3={"Feedback"}  i4={"Community Standards"} i5={"Community Standards"}  i6={"Photosensitive Seizure Warning"} i7={"User Research at Xbox"}/>
                <Part title={"Microsoft Store"} i1={"Microsoft account"} i2={"Microsoft Store Support"} i3={"Returns"}  i4={"Orders tracking"} i5={"Store locations"}/>
                <Part title={"For Developers"} i1={"Games"} i2={"ID@Xbox"} i3={"Windows"}  i4={"Creators Program"} i5={"Designed for Xbox"}/>
            </div>
        </div>
    );
}
export default Foot;
