import Arrange from "./arrange";
import data from "./data";
let type;
let dD=data.map((item,ind)=>{
  if((ind+1)%3===0){
    type="long"+ind
  }
  else{
    type="short"
  }
  return(
   <Arrange 
        className={type}
        title={item.title}
        slogan={item.slogan}
        src={item.src}
   />  
  )   
});

function Sec4(){
    return(
        <div className="shopContainer">
            {dD}
        </div>
    );
}
export default Sec4;