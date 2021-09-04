import React from "react"
import { Tumbler } from "./Button"

const App: React.FC = () => {
  const data ={
    type:"primary",
    text:"Click me",
    disabled:false,
    loading:false,
    func:() => console.log("привет")
  }

  return (
    <div>
    <Tumbler {...data}/>
    </div>
  )
}

export default App;
