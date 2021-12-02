import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React ,{ Component } from 'react';
import Calculator from './Calculator';

class App extends Component{

  constructor(){
    super();
    
    this.state={
      tempp:"",
      weather:"",
      
      description:"",
      icon:""
    }

  }
  

  componentDidMount(){
     var elems = document.querySelectorAll('.modal');
    var instances = window.M.Modal.init(elems);
  }

  searchCity= (e)=>{
    e.preventDefault();
    const mycity = document.getElementById('mcity').value;
    
    console.log(mycity);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${mycity}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`;
    axios.get(url).then((resp)=>{
     this.setState({
      tempp : resp.data.main.temp,
      weather : resp.data.weather[0].description,
      icons: resp.data.weather[0].icon,
      city: resp.data.name
     })
  })
}

render (){
  return (
    <div className="App">
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
            <div id="modal1" className="modal">
              <div className="modal-content">
                <h2>City Weather Details</h2>
                <p>Temprature: {this.state.tempp}</p>
                <p>Weather: {this.state.weather}</p>
                <p>Weather Icon : {this.state.icons}</p>
                <p>City: {this.state.city}</p>

                <form onSubmit={this.searchCity}>
                  <input type="text" placeholder="Search city name" id="mcity"/>
                </form>
              </div>
            </div>
<hr/>

            <div className="">
              <Calculator scale='c' />
              <Calculator scale='f'/>
            </div>
    </div>
    
  
  );
}
}

export default App;
