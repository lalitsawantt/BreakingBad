import React from 'react'

const Char = ({nickname,img, portrayed, status, occupation,name}) => {
  return (
    <div className="char">          
            <img src={img} alt={name}></img>
            <div className="container">
              <h4><b>{name}</b></h4>
              <p>Nickname : {nickname}</p>
            </div>
            <div className="char-info">
              <h4>Overview:</h4>
              <h5>
                Portrayed by : {portrayed} <br/><br/>
                Status : {status} <br/><br/>
                Occupation(s) : {occupation.map((occ, index) => (
                  <p key={index}>{occ}</p>
                ))}<br/>
              </h5>
            </div>
          </div>
  )
}

export default Char
