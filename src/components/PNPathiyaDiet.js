import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import {
  AvoidFoods
} from "./PNIngredients.js";

function PNPathiyaDiet() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/PostNatalCare">PostNatalCare</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Pathiya Diet</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Pathiya Diet</h3>
            <h3 className="section-subheading text-muted">
              The complete postpartum pathiya diet
            </h3>
            <div className="col-md-8 offset-md-2 text-left">
            <h4 className="page-section section-subheading">The first 3 day diet</h4>
               <ul>
                   <li>For the first 3 days after delivery, at early morning around 6am,ginger  be consumed along with honey.</li>
                   <li>For the first 3 days after delivery, at night around 10pm, turmeric balls ( size of amla )  should be taken.To prepare this,turmeric should be mixed with 
                   lukewarm water and taken.If taken,the next day morning, ginger must be taken compulsory</li>
                   <li>For the first 3 days after delivery, at night around 10:30pm, Poondu legiyam should be taken.If taken,the next day morning, ginger must be taken compulsory.Water should be taken only 1/2 hour after taking legiyam</li>
                   <li>For the first 3 days after delivery,at night around 11pm, Sukku legiyam should be taken.Water should be taken only 1/2 after taking legiyam</li>
               </ul>
               
              <h4 className="page-section section-subheading">The first 28 day diet</h4>
              <ul>
                  <li>For the first 28 days after delivery, Garlic should be fried without oil/ghee or shown 
                  directly in flame and consumed along with karuppatti</li>
              </ul>
              <ul>
                  <li>After 28 days of delivery,for three days Kadugu legiyam should be consumed.
                  If taken,the next day morning, ginger must be taken compulsory.Water should be taken only 1/2 after taking legiyam</li>
                  <li>After 35 days of delivery, Vendhaya Kazhi should be consumed once in 2 weeks as long as you breastfeed.
                  If taken,the next day morning, ginger must be taken compulsory.Water should be taken only 1/2 after taking legiyam</li>
              </ul>
              <h4 className="page-section section-subheading">What to avoid for first 28 days</h4>
              Following foods should be avoided only during the first month as mothers digestive system and immune system
              <br></br>
              <br></br>
              <AvoidFoods/>
             
            
              <div className="col-md-8  offset-md-2  text-left">
                <br />
                <br />
                <h5>DISCLAIMER</h5>
                All these information are based on the traditions followed in
                our family and are no way responsible for illness or harm caused
                to you or your baby.Always seek advice from doctor,siddha
                doctor,lactation consultant and pediatrician. This is followed
                for normal labour only and for c section mothers it is advised
                to take only after surgical wounds are healed. Please consult to
                siddha doctor before taking any of these.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PNPathiyaDiet;
