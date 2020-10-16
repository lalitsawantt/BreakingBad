import React from 'react'
import Menu from './Menu'
import {API} from "../API"
import {useEffect, useState} from "react"
import Char from './Char'

const Characters = () => {

  const CHAR_API = `${API}/characters`  

  const [characters, setcharacters] = useState([])


  const getData = () => {
    fetch(CHAR_API)
    .then(res => res.json())
    .then(data => {
      setcharacters(data)
    })
  }
  

  useEffect(() => {

    getData()
    // eslint-disable-next-line
  }, [])


  return (
    <div className="main">
      <Menu />    
      <div className="characters">
        {characters.map((character,index) => (
          <Char key={index} {...character}/>
        ))}
      </div>
    </div>
  )
}

export default Characters

