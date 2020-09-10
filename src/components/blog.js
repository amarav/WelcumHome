import React from "react";
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

function RenderCard(props) {
  const image =  process.env.PUBLIC_URL + props.source;
  return (
    <div>
            <Card >
              <div className="card-block">
                <CardImg  src={image} alt="Image"  width="350" height="170"></CardImg>               
                <CardText>
                  <small className="text-muted">{props.when}</small>
                </CardText>                
                <CardTitle>{props.title}</CardTitle>
                <CardFooter className="mycard-footer">
                  <Link to="/BlogSecretofBriyani" className="text-center">
                    {" "}
                    <Button color="link" className="mycard-button stretched-link">
                      READ POST
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
    </div>
  );
}

function Blog() {
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
        <Row className="justify-content-center">
          <Col className="col-sm-3">
          <RenderCard title="The secret of tasty briyani" when="SEP 10,2020 " source="/assets/img/blog/briyani.jpg"/>
          </Col>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in.
                  Aliquam codeply mauris arcu, tristique a lobortis vitae,
                  condimentum feugiat justo.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title another</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This card has even longer content than the first to show that
                  equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <RenderCard/>
      <BlogAdvise />
      <BlogSecretofBriyani />
      <BlogSecretofSambar />
    </div>
  );
}

export default Blog;
