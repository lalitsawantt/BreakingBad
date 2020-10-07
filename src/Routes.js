import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Menu from "../src/components/Menu"
import Home from './components/Home'
import Characters from "./components/Characters"
import Deaths from "./components/Deaths"
import Quotes from "./components/Quotes"
import Episodes from "./components/Episodes"


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/characters" exact component={Characters} />
        <Route path="/episodes" exact component={Episodes} />
        <Route path="/quotes" exact component={Quotes} />
        <Route path="/deaths" exact component={Deaths} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes
