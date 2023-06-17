import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  })

  return (<h1>I've rendered {count} times!</h1>)
}

class App  extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Timer />
        )
    }
}

export default App;