import Head from "next/head";
import { useState } from "react";
import  MyButton,{HeyButton } from "./my-button";
import History from "./history";

const userName = "";
const max_counter = 10;
const min_counter = -5;



export default function Home() {
const [ count , setCount ] = useState(0)
const [tempUsername, setTempUsername] = useState("");
const [userName, setUserName] = useState("Anu"); 
const [history, setHistory] = useState([]);


const handleInputChange = (e) => {
  const value = (e.target.value);
  setTempUsername(value);
};

const handleReset = () => {
  //history.push(tempUsername);
  //setHistory([...history,userName]);
  setUserName(tempUsername);
  console.log(history);
}

//undo function
const undo = () => {  
  if(history.length === 0) return;

  const lastElementIndex = history.length-1;
  setCount(history[lastElementIndex]);

  const newHistory = history.slice(0,lastElementIndex);
  setHistory(newHistory);
  console.log(newHistory);
};

 const increaseCounter = () => {
  if(count >= max_counter){
    alert("Reached your maximum limit");
    return;
  }
    setHistory([...history,count]);
    setCount (count + 1);
    console.log(history);
 }
 const decreaseCounter = () => {
  if(count <= min_counter){
    alert("Reached your minimun limit");
    return;
  }
  history.push(count);
  setCount (count - 1);
  console.log(history);
}

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <h1 className="heading"> Hello {userName}, {count} !!</h1>
     
     

        <input 
          type="text" 
          onInput={handleInputChange} 
          placeholder="Enter your name" 
        />

       <MyButton 
       text = "Increase counter"
       onClick = {increaseCounter}
       />
       
       <MyButton 
       text = "reset to custom uname"
       onClick = {handleReset}
       />

       <HeyButton
       text = "Decrease counter"
       onClick = {decreaseCounter}
       />

       <HeyButton
       text = "Undo"
       onClick = {undo}
       />
      
      <History
        history={history}
      />
       
      </main>
    </>
  );
}
