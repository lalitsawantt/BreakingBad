import React from 'react'
import Menu from './Menu'
import {API} from "../API"
import {useState, useEffect} from 'react'


const Episodes = () => {

  const [episodes, setepisodes] = useState([])

  const getEpisodes = () => {
    fetch(`${API}episodes`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setepisodes(data)
    })
  }

  useEffect(() => {
    getEpisodes()
  }, [])

  return (
    <div>
      <Menu />
      <div className="episodes">
        {episodes.map((episode, index) => (
          <div className="episode">
            <div key={index}>
              <div className="title">
                <h4>Title : {episode.title}</h4>
              </div>
              <div className="epi-info">
              <h4>S{episode.season}Ep{episode.episode}</h4>
              <h4>Episode number : {episode.episode}</h4>
              <h4>Air date : {episode.air_date}</h4>
              <h4>Characters Involved : {episode.characters.map((character,index) => (
                <p key={index}>{character}</p>
              ))}</h4>
              <br/>
              <br/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episodes
