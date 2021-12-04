import React, { Component } from "react";
import MultiCard from "./MultiCard";
import RandomWeight from "./RandomWeight";
import RegularCard from "./RagularCard";
import axios from "axios";

class FlashCard extends Component{

    constructor(){
        super();
        this.apiHost = `https://aws-services.robertbunch.dev/services`;
        this.state={
            flipClass:"",
            questionData:""
        }
    }
flip=(e)=>{
    let newClass= this.state.flipClass === "" ? "flip":""
    this.setState({
       flipClass: newClass
    })
}
componentDidMount(){
    this.newCard();
}


newCard = ()=>{
    let path = this.apiHost+'/all'
    axios.get(path).then((resp)=>{
        this.setState({
           questionData : resp.data
        })
    })
}


    render(){
        return(
            <>
           <h1>Flash Card</h1>
           <div className="row text-align-center card-holder">
               <div onClick={this.flip}  className={`col-sm-6 offset-sm-3 card ${this.state.flipClass} `}>
               <RegularCard quesdataPrpt={this.state.questionData}  />
               </div>
           </div>
           <button className="btn btn-primary" onClick={this.newCard}> Click Next</button>
           </>
        );
    }
}

export default FlashCard;