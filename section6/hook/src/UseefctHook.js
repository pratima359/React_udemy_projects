import React, { useEffect, useState } from "react";
import User from "./User";

const UseefctHook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
 
  useEffect(()=>{
    console.warn("use effect calling")
  },[data])

  useEffect(()=>{
      alert(`Number of counts is ${count}`);
  },[count])

  let datana="pratima adarshi";

  function childtoPrent(childVar){
      return(<h2>{`Data passed from child to parents ${childVar} `}</h2>);
  }
return(
    <>
    <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>Click</button>

    <p>{data}</p>
    <button onClick={()=>{setData(data+1)}}>Get Data</button>

    <User name = {datana}  custfun={childtoPrent} />
    </>
);
}

export default UseefctHook; 