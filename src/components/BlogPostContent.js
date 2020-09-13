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
   

// The Post looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Post = (props) => {
  const Post = BlogPostsAPI.get(
    parseInt(props.match.params.number, 10)
  )
  
  var MyComponent = mapStringtoComponents[Post.componentname];
  if (!Post) {
    return <div>Sorry, but the Post was not found</div>
  }
  return (
    <div>
      <MyComponent />
      <Link to='/blog'>Back</Link>
    </div>
  )
}

export default Post
