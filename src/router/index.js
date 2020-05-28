import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import React from 'react'
import Movie from '../pages/Movie'
import Notfound from '../pages/Notfound'
import index from '../pages/Home/index'

export default function index() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact  component={index}/>
            <Route path="/movie"   component={Movie}/>
            <Route  component={Notfound}/>
        </Switch>
    </Router>
  )
}
