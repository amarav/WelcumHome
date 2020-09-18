import React from 'react';
import { Card, CardImg, CardText, CardBody, CardDeck,
    CardTitle, CardSubtitle,  Breadcrumb, BreadcrumbItem,Row, Col } from 'reactstrap';    
import { Link } from 'react-router-dom';
import afterpain from './PREGData'
import {monthsix} from './PNIngredients'

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
            Pregnancy is a time when you need to stay extra cautious and its advised not to take any medicines
            during this phase. However, in southern tamilnadu, granny's traditional medicines ( paati vaithyam ) 
            is famous for normal labour.  
            <br/>
            <br/>
            <h4>DISCLAIMER</h4><hr/>
            Each pregnancy is unique and each pregnant women is different. I have penned what we follow as per advise offset
            elders in our family and its HIGHLY recommended that you consult
            your doctor,elders at your home before following any of these.
            <br/>
            <br/>
            <h4>During 6th month</h4>
            <monthsix/>
            <h4>During 7th month</h4>
            <hr/>
            Every night , castor oil should be applied over hips and after 20 minutes hot water should be poured
            over it.This helps to widen pelvic bone and support normal labor.
            <br/>
            <br/>
            <h4>During 9th month</h4>
            <hr/>
            <ul>
              <li>
                1 tsp Butter should be mixed with water from boiling rice and consumed everyday.
              </li>
              <li>
                Fennel seeds should be fried and boiled in 1 cup of water until it reduces to 1/2 cup.
                Palm sugar should be added to this.This mixture should be consumed on alternative days
              </li>
            </ul>
            <h4>After labour pain</h4>
            <hr/>
            The following ingredients should be boiled in 200ml of water for 5 minutes.30 ml of this extract should be
    consumed once labor pain starts.
            <afterpain/>
            <br/>

            <h3 className="text-center">RELATED ARTICLES</h3>
            <hr/>
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