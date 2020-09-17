import React from 'react'
import { Link } from 'react-router-dom'
import BlogSecretofBriyani from './BlogSecretofBriyani'
import BlogSambarSecret from './BlogSambarSecret'
import BlogAdvise from './BlogAdvise'
import PNWhytocare from './PNWhytocare'
import PNIncmilk from './PNIncmilk'
import Babycarekit from './Babycarekit'
import PNLegiyam from './PNLegiyam'
import PNPathiyadiet from './PNPathiyaDiet'
import BlogBFtips from './BlogBFtips'
import Pregnancy from './Pregnancy'

const mapStringtoComponents = {
    blogSecretofBriyani : BlogSecretofBriyani,
    blogSambarSecret : BlogSambarSecret,
    blogAdvise : BlogAdvise,
    pnWhytocare :PNWhytocare,
    pnIncmilk: PNIncmilk,
    babycarekit:Babycarekit,
    pnpathiyadiet:PNPathiyadiet,
    pnlegiyam:PNLegiyam,
    blogbftips: BlogBFtips,
    pregnancy:Pregnancy,
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
