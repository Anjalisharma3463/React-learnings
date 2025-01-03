import { useState , useEffect } from 'react';
import './App.css';

function App() {
console.log("app inside called ");


  const [variable , setvariable] = useState(true);

  useEffect( function (){
   const intervalID = setInterval(() => {
      setvariable(c => !c)
    }, 5000);
    console.log("use effect of every 5sec called ");
    
  },[])


  return <div>
    {variable && <Counter></Counter>}
  </div>
}

function Counter() {
  const [count, setcount] = useState(0);
  console.log(" counter componenet called");
  
  // thsi login runs when whole dom is mounted . mtlb jav whole dom is mountern (first comes on wthe dm web. loaded )r 
  useEffect(function (){
    const clock = setInterval(() => {
      setcount(count => count+1)
    }, 1000);
    console.log(" MOUNT useedffect of counter 1 sec called ");
    
     // this logic runs when dom is unmounted . mtlb jav dom se hi counter chala jaa rha  in condintonal   rendering me a 
    // without ths., baar baar jab componenet counter ) mount unmount ho rha tha dom pe. to baar baar counter functon ka usefeect bar baar call ho rha tha jo kij nahi ho na chahiye.. 
    // so to to stop this we did use clearInterval


    // Jab counter component is unmounted from the DOM , then Fhir bhi that 1s after clock is still running after unmounting from the dom ... to ths infinite clock ew have to stop then use sclearinterval functon . thisis not react doig but we are doing as a developer 
     return function(){
      console.log("UNMOUNTED clear internval when UnMOUNT d");
      
      clearInterval(clock);;
    } 
  },[])
   

  return (
    <div>
      <h1  >counter: {count}</h1>
     </div>
  );
} 


// function Button_component({ToDo , settodo}){

//   function addTask() {
//     // Get the value from the input field
//     const inputElement = document.querySelector("input");
//     const task = inputElement.value.trim(); // Trim to avoid empty strings

//     if (task) {
//       settodo([...ToDo, task]); // Add the new task to the ToDo list
//       inputElement.value = ""; // Clear the input field
//     }
//   }
//   function Delete() {
//     const newarray = ToDo.slice(0, -1); // Create a new array without the last item
//     settodo(newarray); // Set the state with the new array (without the last item)
//   }
  

//  return  (
//   <div>
//     <br />
//   <button id='btn' onClick={addTask}>Add</button> 
//   <br /><br />
//   <button id='dlt' onClick={Delete}> delete</button>
//   </div>
   
//  )
// }




// function App() {
 
//   const [ToDo, settodo] = useState([]); 

//   return  <div>
//         <input type="text" placeholder="Enter a task" />
//         <Button_component ToDo={ToDo} settodo={settodo}></Button_component> 

//        <ul>
//         {ToDo.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//   </div>
  
//   //showing contnet
// }

 

 
export default App
