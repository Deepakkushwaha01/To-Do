import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import To from './To';

function App() {
  const[input,newinput]=useState("");
  function onhandle(event){
newinput(event.target.value)
  }

  const[arr,newarr]=useState([]);
function click(){
  newarr([...arr,input]);
  newinput("");
}
function deletee(id){
  newarr( arr.filter((value,index)=>{
   return index!=id
        } 
  ))
 
}
  return (
    <div className="App">
     <h2 className='heading'>To_Do_list</h2>
     <div className='grid'>

<input 
type="text " 
className='input'  
onChange={onhandle}
 placeholder='Add a item'
 value={input}
 />

<p className='btn'  onClick={click}>➕</p>
     </div>
     {
      arr.map((value,index)=>{
        return(
          <div key={index}>
          <To input={value} id={index} select={deletee}/>
          </div>
        )})}
    
     
    </div>
  );
}

export default App;
