import React from 'react';
import Looping from './Looping';



function Propsexample(props) {
   
  return (
    <>
     <div className="App">
       <h5>Use of props</h5>
         <div>
           <p>Hi {props.name}</p>
           <p>To: {props.to}</p>
           <p>Subject: {props.subject}</p>
         </div>
         <Looping
          name="saurabh Kumar"
          hobbies={['Reading','cooking','Dancing','playing']}
         />
     </div>
    </>
  );
}


export default Propsexample;
