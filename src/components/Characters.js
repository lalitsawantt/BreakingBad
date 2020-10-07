import React from 'react'
import Menu from './Menu'
import {API} from "../API"
import {useEffect, useState} from "react"
import Char from './Char'

const Characters = () => {

  const CHAR_API = `${API}characters`  

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
  }, [])


  return (
    <div>
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



// <div className="characters">
//         {characters.map((character) => (
        // <div className="character">
        //   <div className="char-info">
        //     <h2>Name : {character.name}</h2>
        //     <h2>Nick name : {character.nickname}</h2>
        //     <h2>Status : {character.status}</h2>
        //   </div>
        //   <div className="char-img">
        //     <img src={character.img} alt={character.name}></img>
        //   </div>
        // </div>
      //   <div>
      //     <Card style={{ display: "flex" }}>
      //       <Card.Img variant="top" src={character.img} />
      //       <Card.Body>
      //       <Card.Title>{character.name}</Card.Title>
      //         <Card.Text>
      //           <h5>Nickname : {character.nickname}</h5>
      //           <h5>Status : {character.status}</h5>
      //         </Card.Text>
      //       </Card.Body>
      //     </Card>
      //   </div>
      //   ))}
      // </div>