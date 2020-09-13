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
import BlogPostsAPI from './BlogPostData'


function RenderBlogPost(props) {
  return (
    <div>
       <Row className="justify-content-center">
         
    {BlogPostsAPI.all().map(p => (
            
          <Col className="col-sm-3 .mycard-col-3">
          
        <Card key={p.id}>
            <div className="card-block">
                <CardImg  src={p.source} alt="Image"  width="350" height="170"></CardImg>               
                <CardText>
                  <small className="text-muted">{p.when}</small>
                  {p.title}
                </CardText>        
                <CardFooter className="mycard-footer">
                  <Link to={`/blog/${p.id}`} className="text-center">
                    <Button color="link" className="mycard-button stretched-link">
                      READ POST
                    </Button>
                  </Link>
                </CardFooter>
              </div>    
              
                     
            </Card>
            </Col>
          ))
        }     
        </Row>      
    </div>
  );
}


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
      <BlogSecretofBriyani />
      <BlogSecretofSambar/>
    </div>
  );
}
}
export default Blog;
