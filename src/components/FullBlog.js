import React,{Component} from "react";
import { Card, Button, CardTitle, CardText, CardLink,CardFooter, Row, Col } from "reactstrap";
import {
  CardImg,
  CardBody,
  CardDeck,
  CardSubtitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import { Link } from "react-router-dom";
import BlogAdvise from "./BlogAdvise";
import BlogSecretofBriyani from "./BlogSecretofBriyani";
import BlogSecretofSambar from "./BlogSambarSecret";
import RenderBlogPost from './BlogPost'

class Blog extends Component {
  
  constructor(props) {
    super(props);

  
}
  render()
  {
  return (
    <div className="col-md-8 offset-md-2">
      <div className="container">
      <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Blog</BreadcrumbItem>
          </Breadcrumb>
        </div>
          <RenderBlogPost />
         
      </div>
    </div>
  );
}
}
export default Blog;
