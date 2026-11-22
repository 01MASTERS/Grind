import { FC, ReactElement, useState } from "react"
import './Comp.css'
import Child from "./Child"
import {Card,Button,Badge} from "react-bootstrap";

type StatusProps={
  text:string,
  active?:boolean;
}

function Parent(){
  return <h1>Welcome to Parent</h1>
// let cnt=130;
// let active=0;
//     return (
//         <div>
//             <h1>Welcome to Parent!!!</h1>
//             <Child label="Points" count={cnt} isActive={active} />
            
//         </div>
//     )

// return (
//     <Child>
//       <p>Inside the Child</p>
//       <h1>Hiiiiii</h1>
//     </Child>
//   );

// const btnProps = { variant: "primary", size: "md" };

//   return (
//     <>
//       <Child {...btnProps}>Save</Child>
//       <Child variant="outline-secondary" disabled>
//         Cancel
//       </Child>
//     </>
  // )
// function greet():ReactElement{
// return (
//   <div>
//     <h1>Welcome jii</h1>
//   </div>
// )
// }
//   return (

//     <div>
//       <Child pass={greet}/>
//     </div>
//   )
// const [selected, setSelected] = useState("None");
// function handlePick(topic) {
//     setSelected(topic);
//   }

//   return (
//     <div>
//       <p>
//         Selected topic: <Badge bg="info" text="dark">{selected}</Badge>
//       </p>
//       <Child onPick={handlePick} />
//     </div>
//   );

// const theme = "dark";

//   return (
//     <div className="d-flex flex-column gap-3">
//       <MiddlePanel theme={theme} />
//       <CleanPanel>
//         <DeepLabel theme={theme} />
//       </CleanPanel>
//     </div>
//   );
// let stats:StatusProps={text:"Status?",active:false};
//Props END!
// return(
//   <div>
//     <Child {...Statusprops} />
//   </div>
// )

}

export default Parent