import React from "react";

const poke_api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props)=> {
    
    let imgCust = `${poke_api}${props.id}.png`;

  return (
      <>
      <hr />
      <h1>Pokemon card</h1>
      <div className="df">
                <img src={imgCust} />
                <p>{props.name}</p>
                <p>{props.type}</p>
                <p>{props.exp}</p>
      </div>
      </>
  );
};

export default Pokecard;