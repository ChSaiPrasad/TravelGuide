import {Component} from 'react'

import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'

import TechEra from './Components/TechEra'

class App extends Component() {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TechEra} />
      </Switch>
    )
  }
}

export default App
