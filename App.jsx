import React from "react";
import { useState } from "react";

function App(){
  let [password, setPassword] = React.useState("")
  let [passwordLength, setPasswordLength]= React.useState(8)

const handleLengthIncrease = (e) => {
  e.preventDefault();

  setPasswordLength(passwordLength + 1)
}

const handleLengthDecrease = (e) => {
  e.preventDefault();

  if(passwordLength === 8) return;

  setPasswordLength(passwordLength - 1)
}

const handlePasswordGenerate = React.useCallback(() => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let pass =""

  for(let i=0; i<passwordLength; i++){
    pass = pass + chars[Math.floor(Math.random() * chars.length)]
  }

  setPassword(pass)
},[passwordLength])

React.useEffect(() => {
  handlePasswordGenerate()
}, [passwordLength])
return(
  <div className="h-screen w-screen flex items-center 
   justify-center flex-col gap-y-5 ">
    <input type="text" className="h-10 w-96 outline-none border
     border-slate-800 rounded-lg px-5 text-center" value={password} ></input>
    <div className="flex items-center justify-center">
    <button className="bg-slate-700 h-10 px-5 text-xl font-bold text-slate-200 rounded-lg outline-none " onClick={handleLengthIncrease}>+</button>
    <input type="text" className="h-10 px-5 m-3 text-center outline-none border border-slate-800 rounded-lg"value={passwordLength} readOnly/>
    <button className="bg-slate-700  h-10 px-5 text-xl font-bold text-slate-200 rounded-lg outline-none" onClick={handleLengthDecrease}>-</button>
    </div>
  </div>
  
)
}
export default App;