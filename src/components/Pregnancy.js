import React from 'react';
import { Card, CardImg, CardText, CardBody, CardDeck,
    CardTitle, CardSubtitle,  Breadcrumb, BreadcrumbItem,Row, Col } from 'reactstrap';    
import { Link } from 'react-router-dom';


function Pregnancy(props) {

        return(
        <div className="container">
          <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Pregnancy</BreadcrumbItem>
                </Breadcrumb> 

            </div>
            
            <div className = "col-md-8 offset-md-4">
            <img
                    className="img-fluid"
                    src="/assets/img/blog/pregnant.jpg"
                    width="350" height="350" alt=""
                  />
                  </div>
            <div className = "col-md-8 offset-md-2">
            <br/>
           
            <Row>
            <Col sm="6">
                <Link to="/PNWhytocare'">
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/blog/advise.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Importance of post-natal care
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to={`/blog/3`}>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/blog/whytocare.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Top 10 tips for women after birth
                      </p>
                    </div>
                  </div>
                </Link>
                
                <Link to={`/blog/5`}>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/blog/milksecrete.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Top 10 tips to increase breast milk secretion
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col sm="6">

              
              <Link to='./LactationBooster'>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/lactationboosters/milk.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Foods to increase breast milk secretion
                      </p>
                    </div>
                  </div>
                </Link>
                
                <Link to='./LactationDietChart'>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/lactationboosters/bun.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Diet chart for breastfeeding mothers
                      </p>
                    </div>
                  </div>
                </Link>
                
                <Link to='./Babycarekit'>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/kit/babycarekit.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        How to take care of your baby?
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>

            </div>

         </div>
        
    );
}

export default Pregnancy;