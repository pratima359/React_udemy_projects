import React , {Component} from "react";
import BoilingVerdict from './BoilingVerdict';
import Displaytemp from './BoilingVerdict';
import'./calculator.css' ;


let custClass;
custClass='tooHot';


const scaleLabel={
    c: 'Celsius',
  f: 'Fahrenheit'
};

class Calculator extends Component{
     
    constructor(props){
        super(props);
      this.state ={temperature:''};
    }

    handleChange = (e)=>{
        this.setState({
            temperature:e.target.value
        });
       
    }

     render(){
        const vtemperature = this.state.temperature;
        const scale = this.props.scale;
         return(
             <fieldset>
                <legend className={custClass}>Enter temperature in {scaleLabel[scale]}</legend>
                <input
                value={vtemperature}
                onChange={this.handleChange} />
                <BoilingVerdict
                celsius={parseFloat(vtemperature)} />
               
            </fieldset>
         )
     }
}

export default Calculator;