import React from 'react'
import {Link, withRouter} from "react-router-dom"

const Nav = () => {

  const changeColour = (e) => {
    e.target.style.color='chartreuse'
  }


  const restoreColour = (e) => {
    e.target.style.color='white'

  }

  return (
    <div className="Menu">
      <ul>
         <Link to="/" 
          style={{textDecoration:"none", color:"white"}} 
          onMouseEnter={changeColour} 
          onMouseLeave={restoreColour}>
            <h1>Breaking bad</h1></Link>
        <li>
          <Link to="/" 
          style={{textDecoration:"none", color:"white"}} 
          onMouseEnter={changeColour} 
          onMouseLeave={restoreColour}
          >
            <h4>Home</h4></Link>
        </li>
        <li className="trial">
          <Link to="/characters" 
          style={{textDecoration:"none",color:"white"}} 
          onMouseEnter={changeColour}
          onMouseLeave={restoreColour}>
            <h4>Characters</h4></Link>
        </li>
        <li>
          <Link to="/episodes" 
          style={{textDecoration:"none",color:"white"}} 
          onMouseEnter={changeColour} 
          onMouseLeave={restoreColour}>
            <h4>Episodes</h4></Link>
        </li>
        <li>
          <Link to="/quotes" 
          style={{textDecoration:"none",color:"white"}} 
          onMouseEnter={changeColour}
          onMouseLeave={restoreColour}>
            <h4>Quotes</h4></Link>
        </li>
        <li>
          <Link to="/deaths" 
          style={{textDecoration:"none",color:"white"}} 
          onMouseEnter={changeColour} 
          onMouseLeave={restoreColour}>
            <h4>Deaths</h4></Link>
        </li>

      </ul>
    </div>
  )
}

export default withRouter(Nav)
