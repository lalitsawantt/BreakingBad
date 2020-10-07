import React from 'react'
import Menu from './Menu'
import {useEffect, useState} from 'react'
import {API} from "../API"

const Deaths = () => {

  const [deaths, setdeaths] = useState([])

  const getDeaths = () => {
    fetch(`${API}deaths`)
    .then(res => res.json())
    .then(data => {
      setdeaths(data)
    })
  }

  useEffect(() => {
    getDeaths()
  },[])

  return (
    <div>
      <Menu />
      <div className="deaths">
        {deaths.map((death, index) => (
          <div className="death" key={index}>
            <h3>{death.death}</h3>
            <div className="death-info">
              <h5> Cause : {death.cause}</h5>
              <h5> Responsible : {death.responsible}</h5>
              <h5> Season : {death.season}</h5>
              <h5> Episode : {death.episode}</h5>
              <h5> Last words : {death.last_words}</h5>
              <br/>
              <br/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Deaths
