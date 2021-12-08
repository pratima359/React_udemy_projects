import React, { Component } from "react";
import CityWeather from "./CityWeather";

class  WeatherApp extends Component{
    
    state={
        city:"India"
    }

        cityChange =(e)=>{
            this.setState({
              city:e.target.value
            })
        }


        citysubmit= (e)=>{
            e.preventDefault();
              this.setState({
                  changedCtName:this.state.city
              })
        }


    render(){
        
        return(
            <div>
                <CityWeather  cityName={this.state.changedCtName}/>
                <form onSubmit={this.citysubmit} >
                <input type="text" value={this.state.city} onChange={this.cityChange} />
                <button type="serach" className="btn btn-primary" >Search</button>
                </form>
                {/* <span className="">{}</span> */}
            </div>
        )
    }
}


export default WeatherApp;