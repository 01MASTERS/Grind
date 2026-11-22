import { FC } from "react"
import './Comp.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Card,Button,Badge} from "react-bootstrap";
// function Child({ label, count, isActive }){

//     return (
//         <div>
//       {label}: {count} | Active: {isActive ? "Yes" : "No"}
//         </div>
//     )
// }
// function Child({children}){

//    return <div className="box">{children}</div>;
// }
// function Child({pass}){

// //    return <Button {...props} />;
// return (
//     <div>
//         <Button onClick={pass}>Greet</Button>
//     </div>
// )
// }
function Child({StatusProps}){
return <h1>Welcome to Child</h1>
//     return(
//         <div className="d-flex gap-2">
//       <Button variant="outline-primary" size="sm" onClick={() => onPick("Props")}>
//         Props
//       </Button>
//       <Button variant="outline-primary" size="sm" onClick={() => onPick("State")}>
//         State
//       </Button>
//       <Button variant="outline-primary" size="sm" onClick={() => onPick("Hooks")}>
//         Hooks
//       </Button>
//     </div>
//   );

  //Props END!
//   return (
//     <div>
//         {text}{active==true?"Active":"Inactive"}
//     </div>
//   )


}




export default Child
