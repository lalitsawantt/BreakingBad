import React from 'react'
import Menu from './Menu'
import {useState, useEffect} from 'react'
import {API} from "../API"


const Quotes = () => {

  const [quotes, setquotes] = useState([])

  const getQuotes = () => {
    fetch(`${API}/quotes`)
    .then(res => res.json())
    .then(data => {
      setquotes(data)
    })
  }

  useEffect(() => (
    getQuotes()
  ),[])

  return (
    <div className="main">
      <Menu />
      <div className="quotes">
        {quotes.map((quote, id) => (
          <div className="quote" key={id}>
            <h5>"{quote.quote}"</h5>
            <h5 className="hidden">{quote.author}</h5>
            <h5 className="hidden">{quote.series}</h5>
            <br/>
            <br/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quotes
