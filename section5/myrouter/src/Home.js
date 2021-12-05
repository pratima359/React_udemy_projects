import React from "react";
import config from "./config";
import axios from 'axios';
import { Link } from "react-router-dom";


class Home extends React.Component{
     
    constructor(){
        super();
        this.state={
            movieList :[]
        }
    }

componentDidMount(){
    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
    axios.get(nowPlayingUrl).then((resp)=>{
        this.setState({
             movieList: resp.data.results  
            
        })
    })
}

    render(){
        console.log(this.state.movieList);
        const imageUrl = "http://image.tmdb.org/t/p/w300";
        const movieData = this.state.movieList.map((moviarr, index)=>{
            return(
                <div key={index} className="col s3" >
                    <Link to={`/movie/${moviarr.id}`}>
                     <img src=  {`${imageUrl}${moviarr.poster_path}`} />
                    </Link>
                </div>

            )
        })
        return(
            <div className="row">{movieData}</div>
        )
    }
}

export default Home;