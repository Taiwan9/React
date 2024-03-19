import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AppAxios() {

  const [nomes, setNomes] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setNomes(res.data)
      })
  })
  return (
    <div className="AppAxios">
      {
        nomes.map((data) => {
          return (
            <div>
              <h2>{data.name}</h2>
            </div>
          )
        })
      }
    </div>
  );
}


