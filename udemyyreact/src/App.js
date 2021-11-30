import logo from './logo.svg';
import './App.css';
import Propsexample from './Propsexample';
import Pokecard from './Pokecard';
import Cardnav from './Cardnav';
import data from './appdata';



function getMood(){
  const moods=['Happy','Sad','Silly','Angry'];
  return moods[Math.floor(Math.random() * moods.length)];
}
const getNum =()=>{
  return Math.floor(Math.random() * 10) +1 ;
}

function App() {

   const num = getNum();

  return (
    <>
    <div className="App">
   <h1>My mood is <span style={{'color':'yellow'}}>{getMood()} </span></h1>
    </div>
    <div className="App">
      <p>Your number is {num}</p>
      <p>{num === 8 ? 'you got your number' : 'Better luck next time'}</p>
    </div>
     <div className="App">
       <Propsexample
       name="Pratima Adarshi"
       to="Gaurav Kumar"
       subject="Please share the link"
       />
     </div>
     <div className="App">
    
       <Pokecard
       id={3}
       name='Charmander'
       type= 'fire'
      exp = '62'
       />
     </div>

<Cardnav dataa={data} />
    </>
  );
}


export default App;
