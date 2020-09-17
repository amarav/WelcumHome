import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import {HerbalTeaIng} from './PNIngredients'

function HerbalTea() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/buynow">Buy Now</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Herbal Tea</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
          <h3 className="section-heading text-uppercase">Herbal Tea</h3>
            <h3 className="section-subheading text-muted">Health & Wellness
            </h3>
            <div className="col-md-8 offset-md-2 text-left">
              
              <div className="col-md-8 offset-md-3">
            {" "}
           
          </div>
          
          <div className="col-md-8 offset-md-2 mb-5">
                      <div className="card h-100">
                        <img className="card-img-top" src="/assets/img/kit/herbaltea.jpg" alt=""/>
                        <div className="card-body">
                          <h4 className="card-title">Herbal Tea</h4>
                          <p className="card-text">
                          <ul>
                        <li>Boost immunity</li>
                        <li>Improve digestion</li>
                        <li>Promotes appetite</li>
                        <li>Helps detoxification</li>
                        <li>Weight loss</li>
                        <li>Reduce inflammation</li>                        
                        <li>Relieve stress</li>
                      </ul>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#contact" className="btn btn-success ">BUY NOW</a>
                        </div>
                      </div>
                      <br></br>
                      <br/>
                      
                      Following are the ingredients used in Herbal Tea
                        <HerbalTeaIng/>
                        <br/><br/>
                        <h4>PREPARATION</h4>
                        <hr/>
                        <ol>

                        <li>Take 1 tbsp of Herbal tea and mix it in 1 glass of water</li>
                        <li>Boil the mixture for 3 minutes</li>
                        <li>Filter the boiled mixture</li> 
                        <li>Add country jaggery if required</li> 
                        </ol>
                        <br/>
                        <br/>
                        <h4>HOW TO CONSUME</h4>
                        <p className="text-center">Herbal tea can be taken once a day after meals</p>
                        <hr/>
                    </div>
              <br/><br/>
              
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default HerbalTea;
