import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Quizbar from './Quizbar';
import { Component } from 'react';
import FlashCard from './FlashCard';


class App extends Component  {

  constructor(){
     super();
     this.state={cardStyle:"Random"};
  }

  userChoice= (cardStyle)=>{
    this.setState({
      cardStyle
    })
  }

  render(){
    console.log(this.state.cardStyle);
    return (
      <div className="App">
       <Quizbar varChoice={this.userChoice} />
       <FlashCard />
      </div>
    );
  }
  
}

export default App;
