import React from 'react'
// import {useEffect} from 'react'
import Menu from "./Menu"
// import {API} from "../API"



const Home = () => {

  // const HOME_API = API + "characters"  

  // const getData = () => {
  //   fetch(HOME_API)
  //   .then(res => res.json())
  //   .then(data => {console.log(data)})
  // }
  
  // useEffect(() => {
  //   getData()
  // }, [])


  return (
    <div>
      <Menu />
      <div className="poster">
        <img src="https://i.pinimg.com/564x/37/be/b4/37beb45771fa9f1655ebb7ed6aa9a0e9.jpg" alt="breaking bad poster"></img>
      </div>
    </div>
  )
}

export default Home
