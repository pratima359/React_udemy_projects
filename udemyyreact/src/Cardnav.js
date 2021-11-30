import React from "react";
import "./Cardnav.css";


class Cardnav extends React.Component{
  render(){

    const cities = this.props.dataa.map((city, i)=>{
      return(
         <div key={i} className="city">
         
          <div className="city-name">{city.name}</div>
          <div className="city-price">{city.price}</div>
         </div>
      )
    })

    return(
      <>
       <div className="row cities ">
         <hr/>
         {cities}
       </div>
      </>
    );
  }
}

export default Cardnav;