import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Quiztype from "./Quiztype";



function Quizbar(props){
    return(
        <div className="quiz-bar">
            <h1>Select Your Study Type</h1>
            <ul className="nav nav-pills nav-fills App" >
                <Quiztype icon="dice" Quiztitle="Random"  quizChoice={props.varChoice}/>
                <Quiztype icon="dumbbell" Quiztitle="Weighted" quizChoice={props.varChoice} />
                <Quiztype icon="font" Quiztitle="Regular" quizChoice={props.varChoice} />
                <Quiztype icon="file-alt" Quiztitle="Multi" quizChoice={props.varChoice} />
            </ul>
        </div>
    )
}


export default Quizbar;
