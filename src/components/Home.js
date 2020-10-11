import React from 'react'
import Menu from "./Menu"
// import poster2 from "../poster2.jpg"
// import poster from "../mainPoster.jpg"
import poster3 from "../poster3.png"
import Footer from './Footer'
// import About from './About'

const Home = () => {
  return (
    <div className="main">
      <Menu />
      <div className="poster"></div>
      {/* <img src={poster3} className="poster" alt="Heisenberg"></img> */}
      <Footer/>
    </div>
  )
}

export default Home
