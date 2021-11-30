import React from "react";


class Looping extends React.Component {
    static defaultProps ={
        name:"This is default Name"
    }

    render(){
 const {name, hobbies} = this.props;
const list = hobbies.map(h =><li>{h}</li>);
  return(
      <>
      <hr />
      <h3>Name: {name}</h3>
      
          <p>{list}</p>
          {/* <ul>
              {hobbies.map(hobyary=>{
               return <li>{hobyary}</li>
              })}
          </ul> */}
    
      </>
  );
        }
};


// function Looping(props){
 

//     return(
//         <>
//         <hr />
//         <h3>Name: {props.name}</h3>
//         <ul>
//             <p>Hobbies</p>
//             <ul>
//                 {props.hobbies.map(hobyary=>
//                  <li>{hobyary}</li>
//                 )}
//             </ul>
//         </ul>
//         </>
//     );
//   }
export default Looping;