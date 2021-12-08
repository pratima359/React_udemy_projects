import React, { useRef } from "react";



const User = (props)=>{
let childVar= "i am in child component"

let inputRef = useRef(null);

function chnamgeColor(){
    inputRef.current.style.color ="red";
}
  return (<>
    <p>{props.name} {props.custfun(childVar)}</p>
     <p id="inn" ref={inputRef}>Hey i am input Ref</p>
     <button onClick={chnamgeColor}>Change Color</button>
  </>)
}

export default User;