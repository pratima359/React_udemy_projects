import React from 'react';

import Movie from './Movie';
import Home from './Home';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

class App extends React.Component {  
  render() {  
    return (  
      <Router>  <div>
                  <nav>
                    <div className="nav-wrapper">
                      <ul id="nav-mobile" className="left hide-on-med-and-down">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/movie">Movies</Link></li>
                        </ul>
                    </div> 
                </nav>
                </div>
          
          <Route exact path="/" component={Home} />  
          <Route exact path="/movie/:moviId" component={Movie} />   
       
  </Router>
    )  
  }  
}  

export default App;
