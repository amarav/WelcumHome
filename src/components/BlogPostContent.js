import React from 'react'
import {BlogPostsAPI} from './BlogpostsAPI'
import { Link } from 'react-router-dom'
import BlogSecretofBriyani from './BlogSecretofBriyani'
import BlogSambarSecret from './BlogSambarSecret'
import BlogAdvise from './BlogAdvise'
import PNWhytocare from './PNWhytocare'

const mapStringtoComponents = {
    blogSecretofBriyani : BlogSecretofBriyani,
    blogSambarSecret : BlogSambarSecret,
    blogAdvise : BlogAdvise,
    pnWhytocare :PNWhytocare,
}
   
const Post = (props) => {
 
  
  if (props.post!=null) 
  {
    var MyComponent = mapStringtoComponents[props.post.componentname];
  
    return (
      <div>
        <MyComponent />
        <Link to='/blog'>Back</Link>
      </div>)
  }
  
  else
  {
    return <div>Sorry, but the Post was not found</div>
  }
}

export default Post
