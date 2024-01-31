function Part(props){
    return(
        <div className="footPart">
                    <h4>{props.title}</h4>
                    <ul>
                        <li>{props.i1}</li>
                        <li>{props.i2}</li>
                        <li>{props.i3}</li>
                        <li>{props.i4}</li>
                        <li>{props.i5}</li>
                        <li>{props.i6}</li>
                        <li>{props.i7}</li>
                    </ul>
                </div>
    );
}
export default Part;