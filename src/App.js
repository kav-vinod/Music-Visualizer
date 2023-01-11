import React, { useState, useEffect } from 'react'
import './App.css'; 
//useState = creates a state variable which contains the data retrieved from the backend, and used to render the data on the page
//useEffect - useEffect - use to fetch the backend API on the first render

function App() {
  
  const [data, setData] = useState([{}])
  //data = actual variable 
  //setData = function we can use to manipulate the state of the data variable
  
  useEffect(() => {
    fetch("/output").then(
      //use useEffect to fetch /output route in the backend 
      //response the output route gives us gets converted to json
      res => res.json()
    ).then(
      //whatever data is inside that json - set that data into the data variable using the set data function
      data => {
        setData(data)
        //print data
        console.log(data)
      }
    )
    }, [])
    
  return (
    <div>
        {
          <header>
          <>
          <h1>Music Visualizer</h1>
          <h2>Enjoy images that capture the settings and themes present in the songs you listen to, customized to your preference!</h2>
          </>
          </header>
        }
        
        { 
        
          (typeof data.urls === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          <div className ="images"> {
            data.urls.map((url, i) => (
              //<p key={i}>Image url for verse {i}</p>
                <img src={url} alt="Image for verse"></img>
            ))
            }
          </div>
          )}
        
    </div>
  )
}

export default App 