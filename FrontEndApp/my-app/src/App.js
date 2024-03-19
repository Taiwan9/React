import './App.css';
import React, {useEffect, useState} from 'react';

export default function App() {
const [hora, setHora] = useState(4)
const[minutos, setMinutos] = useState(10)

  useEffect(()=>{
      const interval = setInterval(()=>{
        setMinutos(minutos+1)
        if(minutos == 60){
          setMinutos(0)
          setHora(hora+1)
        }
      }, 1000)

      return ()=> clearInterval(interval)
  })
  return (
    <div className="App">
      <h2>{hora}:{minutos}</h2>
    </div>
  );
}


