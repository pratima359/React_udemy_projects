import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDice, faDumbbell,faFont,faFileAlt } from '@fortawesome/free-solid-svg-icons';


library.add(faDice, faDumbbell,faFont,faFileAlt);

function Quiztype(props){
    return(
        <li className="col-sm-3 center-align">
                    <div className="nav-card" onClick={()=>{props.quizChoice(props.Quiztitle)}}>
                        <FontAwesomeIcon icon={props.icon} size="4x"/>
                        <span>{props.Quiztitle}</span>
                    </div>
                </li>
    )
}

export default Quiztype;