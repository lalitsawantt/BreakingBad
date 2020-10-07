import React from 'react'
import {Link, withRouter} from "react-router-dom"

const Nav = () => {
  return (
    <div className="Menu">
      <ul>
        <li className="logo">
          <h1>Breaking bad</h1>
        </li>
        <li>
          <Link to="/" style={{textDecoration:"none", color:"white"}}><h4>Home</h4></Link>
        </li>
        <li className="trial">
          <Link to="/characters" style={{textDecoration:"none",color:"white"}}><h4>Characters</h4></Link>
        </li>
        <li>
          <Link to="/episodes" style={{textDecoration:"none",color:"white"}}><h4>Episodes</h4></Link>
        </li>
        <li>
          <Link to="/quotes" style={{textDecoration:"none",color:"white"}}><h4>Quotes</h4></Link>
        </li>
        <li>
          <Link to="/deaths" style={{textDecoration:"none",color:"white"}}><h4>Deaths</h4></Link>
        </li>

      </ul>
    </div>
  )
}

export default withRouter(Nav)
