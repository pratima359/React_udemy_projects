import React from "react";
  import axios from "axios";
  import config from "./config";

class Movie extends React.Component { 
  constructor(){
    super();
     this.state ={
       moviDetail:{}
     }
  } 

  componentDidMount(){
    const mid = this.props.match.params.moviId
    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`;
    axios.get(singleMovieUrl).then((response)=>{
           
          this.setState({
            moviDetail : response.data
          })
  })

}

    render() {  
      if(this.state.moviDetail.title === undefined){
        return (<h1>Loading</h1>)
      }

      const imageUrl = "http://image.tmdb.org/t/p/w300";
      return (
        
        <div >
           <ul className="align-item-center">
             <li><img src={`${imageUrl}${this.state.moviDetail.poster_path}`}/></li>
             <li>Title:-{this.state.moviDetail.title}</li>
             <li> Tagline:- {this.state.moviDetail.tagline}</li>
             <li>Overview:- {this.state.moviDetail.overview}</li>
           </ul>
        </div>
       )
    }  
  } 
  
  
  export default Movie ;