import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullBlog from './FullBlog'
import BlogPostContent from './BlogPostContent'
import FullRoster from './FullRoster'
import Player from './Player'


// The Roster component matches one of two different routes
// depending on the full pathname
const blog = () => (
  <Switch>
  <Route exact path='/blog' component={FullBlog}/>
  <Route path='/blog/:number' component={Player}/>
  </Switch>
)


export default blog
