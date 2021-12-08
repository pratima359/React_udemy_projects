import React, { Component } from "react";

class  CityWeather extends Component{

    render(){
        console.log(this.props.cityName)
        return(
            <div>
                <h2>{this.props.cityName}</h2>
               
            </div>
        )
    }
}


export default CityWeather;