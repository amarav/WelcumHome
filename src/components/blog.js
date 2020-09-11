import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullBlog from './FullBlog'
import BlogPost from './BlogPost'

// The Roster component matches one of two different routes
// depending on the full pathname
const blog = () => (
  <Switch>
    <Route exact path='/blog' component={FullBlog}/>
    <Route path='/blog/:id' component={BlogPost}/>
  </Switch>
)


export default blog
