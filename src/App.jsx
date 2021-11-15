import React from 'react'
import {useEffect,useState} from 'react'
import "./App.css"

const App = () => {
const [data,setData]=useState(null);
  //api 
  useEffect(()=>{
    fetch("https://api.punkapi.com/v2/beers")
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  })
  console.log(data);
  return (
    <div className="App">
     {data && <Main beerData={data}></Main>}
      <NavBar></NavBar>
    </div>
  )
}

export default App
