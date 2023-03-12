import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OnOff } from './components/OnOff/OnOff';

function App() {
  return (
    <div className="App">
      <OnOff value={true}/>
      {/* <Rating />
      <Accordion /> */}
    </div>
  );
}

// function Rating(){
//   return(
//     <div>
//       <Star />
//       <Star />
//       <Star />
//       <Star />
//       <Star />
//     </div>
//   )
// }

// function Star(){
//   return(
//     <div>Star</div>
//   )
// }

// function Accordion(){
//   return(
//     <div>
//       <AccordionTitle />
//       <AccordionBody />
//     </div>
//   )
// }

// function AccordionTitle(){
//   return <h3>меню</h3>
// }

// function AccordionBody(){
//   return(
//     <div>
//       <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//       </ul>
//     </div>
//   )
// }


export default App;
