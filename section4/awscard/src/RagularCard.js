import React from "react";

function RegularCard(props){
    console.log(props.quesdataPrpt)
    return(
        <>
        <div className="card-back">
            {props.quesdataPrpt.service}
        </div>
        <div className="card-front">
           <div>{props.quesdataPrpt.desc}</div>
           <div>{props.quesdataPrpt.cat}</div> 
        </div>
        </>
    )

}

export default RegularCard;