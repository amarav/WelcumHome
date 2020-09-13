import React from 'react'
import BlogPostsAPI from './BlogPostData'
import { Link } from 'react-router-dom'
import BlogSecretofBriyani from './BlogSecretofBriyani'
import BlogSambarSecret from './BlogSambarSecret'
import BlogAdvise from './BlogAdvise'

const mapStringtoComponents = {
    blogSecretofBriyani : BlogSecretofBriyani,
    blogSambarSecret : BlogSambarSecret,
    blogAdvise : BlogAdvise
}
   
const Post = (props) => {
 
  
  var MyComponent = mapStringtoComponents[props.post.componentname];
  if (props.post!=null) 
  return (
    <div>
      <MyComponent />
      <Link to='/blog'>Back</Link>
    </div>
  )
  else
  {
    return <div>Sorry, but the Post was not found</div>
  }
}

export default Post
